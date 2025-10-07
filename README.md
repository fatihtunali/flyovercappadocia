# Flyover Cappadocia

Flyover Cappadocia tourism website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MySQL (via Prisma ORM)
- **Deployment**: VPS with PM2

## 📁 Project Structure

```
flyovercappadocia/
├── app/              # Next.js App Router pages
├── components/       # React components
├── lib/              # Utility functions
├── public/           # Static assets
└── .env.local        # Environment variables (not in repo)
```

## 🔧 Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/fatihtunali/flyovercappadocia.git
   cd flyovercappadocia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 📦 Production Deployment

### Server Configuration

**Production Server**: 188.132.230.193
**Port**: 3001 (separate from funnytourism.com on port 3000)
**Location**: `/home/flyover/flyovercappadocia/`
**Database**: `flyover_cappadocia`

### Deploy to Production

```bash
# SSH into server
ssh root@188.132.230.193

# Navigate to project
cd /home/flyover/flyovercappadocia

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build the application
npm run build

# Restart PM2
pm2 restart flyover-cappadocia
```

### PM2 Process Management

```bash
# Check status
pm2 list

# View logs
pm2 logs flyover-cappadocia

# Restart
pm2 restart flyover-cappadocia

# Stop
pm2 stop flyover-cappadocia
```

## 🌐 Environment Variables

See `.env.example` for required environment variables:

- `DATABASE_URL`: MySQL connection string
- `PORT`: Server port (3001 for production)
- `NEXT_PUBLIC_SITE_URL`: Public site URL

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Security

- Environment variables are not committed to the repository
- Database credentials are stored securely in `.env.local`
- Separate user and database from other sites on the server

## 📄 License

Private - All rights reserved

## 🤝 Contributing

This is a private project. For questions or contributions, contact the project owner.
