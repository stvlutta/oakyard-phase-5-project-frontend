# 🏢 Oakyard - Space Booking Platform

A modern, full-featured space booking platform built with React, Redux, and Supabase. Oakyard connects space owners with people looking for unique venues for meetings, events, coworking, and more.

## ✨ Features

### 🔍 **Space Discovery**
- Browse and search available spaces by location, category, and amenities
- Advanced filtering with real-time search
- Interactive space galleries with high-quality images
- Detailed space information including capacity, hourly rates, and amenities

### 📅 **Booking Management**  
- Real-time availability checking
- Secure booking flow with payment integration
- Booking history and management dashboard
- Email confirmations and notifications

### 👥 **User Management**
- User authentication with Supabase Auth
- Profile management with avatar uploads
- Space owner and renter roles
- Admin panel for platform management

### 🎯 **Space Categories**
- **Meeting Rooms** - Professional spaces for business meetings
- **Creative Studios** - Inspiring environments for creative work
- **Event Halls** - Large venues for events and celebrations
- **Coworking Spaces** - Flexible workspaces for individuals and teams
- **Private Offices** - Dedicated office spaces for businesses

### 💬 **Communication**
- Real-time chat functionality
- Virtual meeting integration
- Socket.io powered real-time updates
- In-app messaging between hosts and guests

### 📱 **Modern UI/UX**
- Responsive design for all devices
- Dark/light theme support
- Smooth animations and transitions
- Accessibility-first design principles

## 🚀 Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management with RTK Query
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful SVG icons

### **Backend Integration**
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Socket.io** - Real-time communication
- **React Query** - Server state management

### **UI Components**
- **shadcn/ui** - Re-usable component library
- **Sonner** - Toast notifications
- **Class Variance Authority** - Component variants
- **Framer Motion** - Animation library

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/oakyard-phase-5-project-frontend.git
   cd oakyard-phase-5-project-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_SOCKET_URL=your_socket_server_url
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Visit `http://localhost:5173`

## 🛠️ Development

### **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── layout/         # Layout components (Header, Footer)
├── pages/              # Page components
│   ├── auth/           # Authentication pages
│   └── admin/          # Admin panel pages
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── services/           # API services
├── store/              # Redux store and slices
├── lib/                # Utility functions
├── assets/             # Static assets
└── integrations/       # Third-party integrations
```

### **Key Components**

- **`src/App.jsx`** - Main application component with routing
- **`src/store/store.js`** - Redux store configuration
- **`src/services/spacesApi.js`** - Spaces API service
- **`src/contexts/AuthContext.jsx`** - Authentication context
- **`src/components/layout/Header.jsx`** - Navigation header

## 🌐 Deployment

### **Vercel Deployment** (Recommended)

1. **Connect to Vercel**
   - Import project to Vercel
   - Configure environment variables
   - Deploy automatically

2. **Manual Deployment**
   ```bash
   npm run build
   vercel --prod
   ```

### **Other Platforms**
- **Netlify**: Works out of the box with `npm run build`
- **Firebase Hosting**: Configure `firebase.json` for SPA routing
- **AWS S3**: Use with CloudFront for SPA routing

### **Environment Variables for Production**
```env
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_supabase_key
VITE_SOCKET_URL=your_production_socket_url
```

## 🔧 Configuration

### **Supabase Setup**
1. Create a new Supabase project
2. Set up authentication providers
3. Create database tables for spaces, bookings, users
4. Configure RLS (Row Level Security) policies
5. Add your Supabase URL and keys to environment variables

### **Authentication**
- Email/password authentication
- Social login (Google, GitHub) - configurable
- Protected routes with authentication middleware
- Role-based access control (admin, user, space owner)

## 🎨 Customization

### **Theming**
The app uses Tailwind CSS with CSS custom properties for theming:

```css
/* Light theme */
:root {
  --primary: 220 70% 50%;
  --secondary: 210 40% 98%;
  --accent: 142 86% 28%;
}

/* Dark theme */
.dark {
  --primary: 220 70% 50%;
  --secondary: 222.2 84% 4.9%;
  --accent: 142 86% 28%;
}
```

### **Adding New Components**
Use the shadcn/ui CLI to add new components:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
```

## 📱 Features in Detail

### **Space Management**
- **Space Listing**: Owners can list their spaces with photos, descriptions, and pricing
- **Availability Calendar**: Real-time availability management
- **Space Analytics**: View booking statistics and revenue

### **Booking Flow**
1. **Search & Filter**: Find spaces by location, date, and requirements
2. **Space Details**: View detailed information and photos
3. **Booking Form**: Select date/time and provide booking details
4. **Payment**: Secure payment processing (integration ready)
5. **Confirmation**: Email confirmation and booking management

### **Admin Features**
- **User Management**: View and manage platform users
- **Space Moderation**: Approve/reject space listings
- **Analytics Dashboard**: Platform usage and revenue metrics
- **Content Management**: Manage platform content and settings

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### **Getting Help**
- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs and request features via GitHub Issues
- **Community**: Join our Discord/Slack community (link coming soon)

### **Common Issues**
- **Build Errors**: Ensure all dependencies are installed with `npm install`
- **Environment Variables**: Check that all required env vars are set
- **Supabase Connection**: Verify Supabase URL and keys are correct

## 👨‍💻 Development Team

Built with ❤️ by the Oakyard development team.

---

**🌟 Star this repository if you find it helpful!**

For more information, visit our [website](https://oakyard.com) or contact us at [support@oakyard.com](mailto:support@oakyard.com).