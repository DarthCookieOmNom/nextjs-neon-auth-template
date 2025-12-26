# Sports App

Eine moderne Webanwendung für Sport-Management, gebaut mit Next.js 15, Neon Datenbank und NextAuth.js.

## Features

- **Next.js 15** mit App Router und TypeScript
- **Neon Serverless Postgres** Datenbank
- **Tailwind CSS** mit modernem Navy-Blau/Gelb Design
- **NextAuth.js v5** für Google OAuth Authentifizierung
- **Zugriffsbeschränkung** - nur ein spezifischer User darf sich anmelden
- **Prisma ORM** für Datenbank-Management
- **Optimiert für Vercel** Deployment

## Design

Die Anwendung verwendet ein modernes Farbschema:
- **Primärfarbe**: Navy Blau (#001f3f)
- **Sekundärfarbe**: Gold/Gelb (#FFD700)
- Glassmorphism-Effekte und moderne UI-Komponenten

## Setup

### 1. Repository klonen

```bash
git clone https://github.com/DarthCookieOmNom/sports.git
cd sports
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Neon Datenbank erstellen

1. Gehen Sie zu [Neon Console](https://console.neon.tech/)
2. Erstellen Sie ein neues Projekt
3. Kopieren Sie die Connection String

### 4. Google OAuth einrichten

1. Gehen Sie zur [Google Cloud Console](https://console.cloud.google.com/)
2. Erstellen Sie ein neues Projekt oder wählen Sie ein bestehendes
3. Aktivieren Sie die Google+ API
4. Erstellen Sie OAuth 2.0 Credentials:
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
5. Kopieren Sie Client ID und Client Secret

### 5. Environment Variables einrichten

Kopieren Sie `.env.local.example` zu `.env.local`:

```bash
cp .env.local.example .env.local
```

Füllen Sie die Werte aus:

```env
# Database
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here  # Generieren mit: openssl rand -base64 32

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Nur dieser User darf sich anmelden
ALLOWED_USER_EMAIL=your-email@gmail.com
```

### 6. Datenbank initialisieren

```bash
npm run db:push
```

### 7. Entwicklungsserver starten

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser.

## Vercel Deployment

### 1. Projekt zu Vercel deployen

```bash
# Vercel CLI installieren (falls noch nicht installiert)
npm i -g vercel

# Deployen
vercel
```

### 2. Environment Variables in Vercel setzen

Gehen Sie zu Ihrem Projekt in der Vercel Dashboard und fügen Sie die Environment Variables hinzu:

- `DATABASE_URL`
- `NEXTAUTH_URL` (Ihre Produktions-URL, z.B. https://sports.vercel.app)
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `ALLOWED_USER_EMAIL`

### 3. Google OAuth für Produktion aktualisieren

Fügen Sie in der Google Cloud Console die Produktions-URLs hinzu:
- Authorized JavaScript origins: `https://your-domain.vercel.app`
- Authorized redirect URIs: `https://your-domain.vercel.app/api/auth/callback/google`

## Scripts

- `npm run dev` - Startet den Entwicklungsserver mit Turbopack
- `npm run build` - Baut die Anwendung für Produktion
- `npm run start` - Startet den Produktionsserver
- `npm run lint` - Führt ESLint aus
- `npm run db:generate` - Generiert Prisma Client
- `npm run db:push` - Pusht Schema zur Datenbank
- `npm run db:migrate` - Erstellt und führt Migrationen aus
- `npm run db:studio` - Öffnet Prisma Studio

## Projekt-Struktur

```
sports/
├── app/
│   ├── api/
│   │   └── auth/[...nextauth]/
│   │       └── route.ts          # NextAuth API Route
│   ├── auth/
│   │   └── error/
│   │       └── page.tsx           # Auth Error Seite
│   ├── dashboard/
│   │   └── page.tsx               # Dashboard (geschützt)
│   ├── globals.css                # Globale Styles
│   ├── layout.tsx                 # Root Layout
│   └── page.tsx                   # Homepage
├── components/
│   └── Header.tsx                 # Header Komponente
├── lib/
│   └── db.ts                      # Prisma Client mit Neon Adapter
├── prisma/
│   └── schema.prisma              # Datenbank Schema
├── auth.config.ts                 # NextAuth Konfiguration
├── auth.ts                        # NextAuth Setup
├── middleware.ts                  # Next.js Middleware für Auth
├── tailwind.config.ts             # Tailwind Konfiguration
└── next.config.ts                 # Next.js Konfiguration
```

## Sicherheit

- Nur der in `ALLOWED_USER_EMAIL` angegebene User kann sich anmelden
- Alle anderen Google-Konten werden abgelehnt
- Session-basierte Authentifizierung mit JWT
- Geschützte Routen durch Middleware
- Sichere Umgebungsvariablen

## Technologie-Stack

- **Framework**: Next.js 15
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Authentifizierung**: NextAuth.js v5
- **Datenbank**: Neon Serverless Postgres
- **ORM**: Prisma
- **Deployment**: Vercel
- **OAuth Provider**: Google

## Lizenz

ISC
