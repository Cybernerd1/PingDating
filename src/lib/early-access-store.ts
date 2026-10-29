import fs from "fs/promises";
import path from "path";

export interface EarlyAccessRecord {
  id: string;
  email: string;
  source: string;
  createdAt: string;
  userAgent?: string;
  ip?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "early_access.json");

async function ensureDataFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(DB_FILE);
    } catch {
      await fs.writeFile(DB_FILE, JSON.stringify([], null, 2), "utf-8");
    }
  } catch (error) {
    console.error("Failed to ensure early_access data file:", error);
  }
}

export async function getRegistrations(): Promise<EarlyAccessRecord[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(DB_FILE, "utf-8");
    return JSON.parse(raw) as EarlyAccessRecord[];
  } catch (err) {
    console.error("Error reading early access registrations:", err);
    return [];
  }
}

export async function addRegistration(
  email: string,
  source = "website_landing",
  metadata: { userAgent?: string; ip?: string } = {}
): Promise<{ success: boolean; isDuplicate: boolean; record: EarlyAccessRecord }> {
  await ensureDataFile();
  const normalizedEmail = email.trim().toLowerCase();
  const existing = await getRegistrations();

  const found = existing.find((r) => r.email === normalizedEmail);
  if (found) {
    return {
      success: true,
      isDuplicate: true,
      record: found,
    };
  }

  const newRecord: EarlyAccessRecord = {
    id: `ea_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    email: normalizedEmail,
    source,
    createdAt: new Date().toISOString(),
    userAgent: metadata.userAgent,
    ip: metadata.ip,
  };

  existing.push(newRecord);
  const tmpFile = `${DB_FILE}.${Date.now()}.tmp`;
  await fs.writeFile(tmpFile, JSON.stringify(existing, null, 2), "utf-8");
  await fs.rename(tmpFile, DB_FILE);

  return {
    success: true,
    isDuplicate: false,
    record: newRecord,
  };
}

