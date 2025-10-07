# Flyover Cappadocia - Hot Air Balloon Booking Website

## 🎈 Website Overview

A complete B2C booking website for selling hot air balloon rides in Cappadocia, Turkey. The site acts as a booking agent working with multiple balloon operators.

## ✅ Completed Features

### Pages Created:
1. **Homepage** (`/`) - Hero section, package preview, testimonials, why choose us
2. **Packages** (`/packages`) - Detailed package information (Standard €150, Deluxe €200, VIP €800)
3. **Gallery** (`/gallery`) - Photo gallery (currently with placeholders for your real photos)
4. **How It Works** (`/how-it-works`) - Step-by-step journey from booking to landing
5. **FAQ** (`/faq`) - 22 comprehensive frequently asked questions with accordion interface
6. **Contact/Booking** (`/contact`) - Booking request form with all necessary fields

### Components:
- **Navigation** - Responsive header with mobile menu
- **Footer** - Multi-column footer with links and contact info

### Design Features:
- ✅ Mobile-first responsive design
- ✅ Orange/yellow warm color scheme (sunrise theme)
- ✅ Modern, clean layout with Tailwind CSS
- ✅ Smooth transitions and hover effects
- ✅ SEO-friendly structure

## 🚀 Running the Website

### Development Mode:
```bash
npm run dev
```
Visit: http://localhost:3001

### Production Build:
```bash
npm run build
npm start
```

## 📝 Next Steps - What You Need to Customize:

### 1. **Add Real Images**
   - Create folder: `public/images/gallery/`
   - Add your balloon/Cappadocia photos
   - Update `app/gallery/page.tsx` to display real images
   - Add hero background image to homepage

### 2. **Update Contact Information**
   - **Email**: Replace `info@flyovercappadocia.com` with your real email
   - **Phone/WhatsApp**: Replace `+90 XXX XXX XX XX` with your actual number
   - **WhatsApp Link**: Update the WhatsApp URL in contact page and FAQ
   - Files to update:
     - `components/Footer.tsx`
     - `app/contact/page.tsx`
     - `app/faq/page.tsx`

### 3. **Add Partner Companies**
   - Create a partners section on homepage
   - Add partner balloon company logos to `public/images/partners/`
   - List partner company names

### 4. **Implement Form Submission**
   - Currently the contact form just logs to console
   - Options:
     - Send email via API (SendGrid, Mailgun, etc.)
     - Save to MySQL database
     - Send to CRM system
     - Forward to your email

### 5. **Adjust Pricing**
   - Verify package prices (currently €150, €200, €800)
   - Update if needed in:
     - `app/page.tsx` (homepage)
     - `app/packages/page.tsx`
     - `app/contact/page.tsx` (booking form)

### 6. **Add Multi-Language Support**
   - Currently English only
   - Add Turkish translation
   - Consider other languages (Russian, Chinese, Arabic for tourism)
   - Use next-i18next or similar library

### 7. **SEO & Analytics**
   - Add Google Analytics tracking code
   - Add Facebook Pixel (for ads)
   - Create sitemap
   - Add robots.txt
   - Optimize meta descriptions per page

### 8. **Payment Integration** (Optional)
   - Stripe for credit cards
   - PayPal
   - Local Turkish payment gateways
   - Or keep it as inquiry-only (current setup)

## 📂 Project Structure

```
flyovercappadocia/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Main layout with nav/footer
│   ├── globals.css           # Global styles
│   ├── packages/
│   │   └── page.tsx          # Packages page
│   ├── gallery/
│   │   └── page.tsx          # Gallery page
│   ├── how-it-works/
│   │   └── page.tsx          # How it works page
│   ├── faq/
│   │   └── page.tsx          # FAQ page
│   └── contact/
│       └── page.tsx          # Contact/booking page
├── components/
│   ├── Navigation.tsx        # Header navigation
│   └── Footer.tsx            # Footer component
├── public/
│   └── images/               # Add your images here
└── .env.local                # Environment variables
```

## 🎨 Color Scheme

- **Primary Orange**: #ea580c (orange-600)
- **Secondary Yellow**: #eab308 (yellow-500)
- **Accent**: Gradients from orange to yellow (sunrise theme)
- **Text**: Gray scale for readability

## 📱 Mobile Responsive

All pages are fully responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Technology Stack

- **Framework**: Next.js 15.5.4
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Database**: MySQL (configured in .env.local)

## 📞 Support & Questions

Update all placeholder contact info with your actual details before going live!

---

**Created**: October 2025
**Status**: Ready for customization and deployment
