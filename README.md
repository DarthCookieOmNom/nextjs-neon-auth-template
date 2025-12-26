# Next.js App Template mit Google OAuth & Neon

Ein produktionsreifes Next.js 15 Template mit NextAuth.js v5, Neon PostgreSQL, Tailwind CSS 4 und Single-User Google OAuth Authentifizierung.

## ✨ Features

- **Next.js 15** mit App Router und TypeScript
- **NextAuth.js v5** (Beta) für sichere Authentifizierung
- **Google OAuth** mit E-Mail-basierter Zugriffsbeschränkung
- **Neon Serverless Postgres** Datenbank
- **Prisma ORM** für Datenbank-Management
- **Tailwind CSS 4** mit anpassbarem Theme
- **JWT Sessions** für schnelle, skalierbare Auth
- **Vercel-optimiert** für einfaches Deployment

## 🎨 Design

- Anpassbares Farbschema (Standard: Navy-Blau & Gold)
- Glassmorphism-Effekte
- Responsive Layout
- Dark Mode Support

## 🚀 Quick Start

### 1. Repository klonen

```bash
git clone <your-template-repo>
cd <project-name>
npm install
```

### 2. Neon Datenbank erstellen

1. Erstellen Sie ein kostenloses Konto auf [Neon](https://neon.tech)
2. Erstellen Sie ein neues Projekt
3. Kopieren Sie die Connection String

### 3. Google OAuth einrichten

1. Gehen Sie zur [Google Cloud Console](https://console.cloud.google.com/)
2. Erstellen Sie ein neues Projekt
3. Aktivieren Sie die Google+ API
4. Erstellen Sie OAuth 2.0 Credentials:
   - **Authorized JavaScript origins**: `http://localhost:3000`
   - **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google`
5. Kopieren Sie Client ID und Client Secret

### 4. Environment Variables

Kopieren Sie `.env.local.example` zu `.env.local`:

```bash
cp .env.local.example .env.local
```

Füllen Sie die Werte aus:

```env
# Neon Database
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=  # Generieren mit: openssl rand -base64 32

# Google OAuth
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# Nur dieser User darf sich anmelden
ALLOWED_USER_EMAIL=your-email@gmail.com
```

### 5. Datenbank initialisieren

```bash
npm run db:push
```

### 6. Entwicklungsserver starten

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000)

## 📦 Vercel Deployment

### 1. Projekt zu Vercel deployen

```bash
vercel
```

### 2. Environment Variables setzen

In der Vercel Dashboard unter Settings → Environment Variables:

- `DATABASE_URL`
- `NEXTAUTH_URL` (z.B. `https://your-app.vercel.app`)
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `ALLOWED_USER_EMAIL`

### 3. Google OAuth für Produktion aktualisieren

Fügen Sie in der Google Cloud Console hinzu:
- **Authorized JavaScript origins**: `https://your-domain.com`
- **Authorized redirect URIs**: `https://your-domain.com/api/auth/callback/google`

## 🔐 Sicherheitsfeatures

- **Single-User Zugriff**: Nur die in `ALLOWED_USER_EMAIL` angegebene E-Mail kann sich anmelden
- **JWT Sessions**: Sichere, verschlüsselte Token-basierte Sessions
- **Protected Routes**: Dashboard ist nur für authentifizierte User zugänglich
- **CSRF Protection**: Eingebaut in NextAuth.js
- **Secure Cookies**: HTTP-only, Secure, SameSite Cookies

## 🎨 Farbschema anpassen

Passen Sie die Farben in `app/globals.css` an:

```css
@theme {
  --color-primary: #001f3f;    /* Ihre Primärfarbe */
  --color-secondary: #FFD700;  /* Ihre Sekundärfarbe */
  /* ... weitere Farbvarianten */
}
```

## 📁 Projekt-Struktur

```
.
├── app/
│   ├── api/auth/[...nextauth]/   # NextAuth API Route
│   ├── auth/error/                # Auth Error Page
│   ├── dashboard/                 # Geschütztes Dashboard
│   ├── globals.css                # Tailwind & Theme
│   ├── layout.tsx                 # Root Layout
│   └── page.tsx                   # Homepage mit Login
├── components/
│   ├── Header.tsx                 # App Header
│   └── SignInButton.tsx           # Google Sign-In Button
├── lib/
│   └── db.ts                      # Prisma Client
├── prisma/
│   └── schema.prisma              # Datenbank Schema
├── auth.config.ts                 # NextAuth Konfiguration
├── auth.ts                        # NextAuth Setup
└── middleware.ts                  # Route Protection (optional)
```

## 🛠️ Verfügbare Scripts

```bash
npm run dev          # Entwicklungsserver mit Turbopack
npm run build        # Production Build
npm run start        # Production Server
npm run lint         # ESLint
npm run db:generate  # Prisma Client generieren
npm run db:push      # Schema zur DB pushen
npm run db:migrate   # Migrationen erstellen
npm run db:studio    # Prisma Studio öffnen
```

## 🔄 Von Template zu eigenem Projekt

1. **Projekt umbenennen**: Ändern Sie `name` in `package.json`
2. **Farben anpassen**: Bearbeiten Sie `app/globals.css`
3. **Logo/Branding**: Aktualisieren Sie `components/Header.tsx`
4. **Dashboard**: Bauen Sie `app/dashboard/page.tsx` aus
5. **Datenbank Schema**: Erweitern Sie `prisma/schema.prisma`

## 📝 Wichtige Hinweise

- **NextAuth.js v5** ist noch in Beta - für Produktion v4 erwägen
- **Neon Free Tier** hat Limits - für hohen Traffic upgraden
- **JWT Sessions** speichern keine User-Daten in DB (nutzen Sie Prisma Adapter für DB-Sessions)
- **Single User Auth** ist für Admin-Panels gedacht - für Multi-User eine andere Strategie verwenden

## 🐛 Troubleshooting

### Login-Loop

- Prüfen Sie, ob `NEXTAUTH_SECRET` gesetzt ist
- Verifizieren Sie Google OAuth Redirect URIs
- Checken Sie `ALLOWED_USER_EMAIL` auf Tippfehler

### Datenbank-Fehler

- Prüfen Sie `DATABASE_URL` Format
- Stellen Sie sicher, dass die Datenbank erreichbar ist
- Führen Sie `npm run db:push` aus

### Build-Fehler

- Löschen Sie `.next` Ordner und `node_modules`
- Führen Sie `npm install` erneut aus
- Prüfen Sie TypeScript Fehler mit `npm run lint`

## 📚 Weitere Ressourcen

- [Next.js Dokumentation](https://nextjs.org/docs)
- [NextAuth.js Dokumentation](https://authjs.dev/)
- [Neon Dokumentation](https://neon.tech/docs)
- [Prisma Dokumentation](https://www.prisma.io/docs)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)

## 📄 Lizenz

ISC

---

**Erstellt mit ❤️ und Claude Code**
