import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account — Ping",
  description:
    "Permanently delete your Ping account and all associated data. This action is irreversible.",
  robots: { index: false, follow: false },
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

