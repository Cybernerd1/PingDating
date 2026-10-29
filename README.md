# Ping — Product Launch Landing Page (`pinglanding`)

A modern, motion-driven editorial product launch website for **Ping**, built with Next.js App Router, Tailwind CSS, GSAP, and Motion.

---

## 1. Project Overview & Features

- **Editorial Hero**: Asymmetrical layout, oversized typography, curated portraiture, real Ping logo assets.
- **Cinematic Storytelling**: Three narrative beats detailing the emotional journey of discovery without repetitive phone mockups.
- **Interactive App Simulator**: A stable, stationary smartphone preview with deterministic matching, profile deck, and real interactive contextual chat.
- **The Connection Moment**: GSAP ScrollTrigger controlled cinematic convergence scene with subtle radiant glow.
- **Editorial Features Grid**: Asymmetric layout showcasing Discover, Connect, and Converse pillars.
- **Product Showcase**: Interactive tabbed gallery for Discover, Profile, Matches, and Chat surfaces.
- **Early-Access Registration**: Validated email flow (React Hook Form + Zod) writing to persistent transactional storage.
- **Legal Compliance**: Dedicated web routes for [`/privacy`](/privacy) and [`/terms`](/terms) reproducing the app's official policies.

---

## 2. API & Security Audit

### Endpoints
- `POST /api/early-access`:
  - Registers early-access subscribers.
  - Validates input format with Zod.
  - Automatically deduplicates entries without error.
  - **No secrets or backend database credentials exposed to client.**
- `GET /api/early-access`:
  - Public response: `{ status: "operational" }` (health check only, no metrics or subscriber counts leaked).
  - Admin inspection (optional): Protected via `Authorization: Bearer <ADMIN_API_KEY>` header to return registration counts.

### Client-Side Isolation
- The interactive simulator runs in local React memory. It does not contact the production dating backend or leak real daters.
- Zero client-exposed environment secrets (`NEXT_PUBLIC_` variables with sensitive tokens).

---

## 3. Local Development

```bash
# Navigate to the landing project
cd pinglanding

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## 4. Production Build & Test

```bash
# Run ESLint
npm run lint

# Compile production build
npm run build

# Start production server
npm run start
```

---

## 5. Deployment Options

### Option A: Vercel (Recommended)
1. Push the repository to GitHub / GitLab.
2. In the Vercel dashboard, click **Add New Project** and set the **Root Directory** to `pinglanding`.
3. Framework Preset: **Next.js** (auto-detected).
4. (Optional) Set environment variables:
   - `ADMIN_API_KEY`: A secure random string for reading waitlist metrics.
5. Click **Deploy**.

### Option B: Docker / Container (AWS, GCP, Railway, Render)
```bash
# Build the Docker image
docker build -t pinglanding:latest .

# Run the container
docker run -d -p 3000:3000 --name ping-landing pinglanding:latest
```

### Option C: Ubuntu VPS with PM2 & Nginx
```bash
# Build the project
npm run build

# Start with PM2
pm2 start npm --name "pinglanding" -- run start -- -p 3000

# Save PM2 process list
pm2 save
```
Configure Nginx reverse proxy to forward traffic from port 80/443 to `http://127.0.0.1:3000`.
