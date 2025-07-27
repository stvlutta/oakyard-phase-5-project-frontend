# 🏢 Oakyard - Space Booking Platform

A modern, full-featured space booking platform built with React for frontend and Flask for backend. Oakyard connects space owners with people looking for unique venues for meetings, events, coworking, and more.

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
- **PostgreSQL** - Relational database for data storage
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


---

**🌟 Star this repository if you find it helpful!**

For more information, visit our [website](https://oakyard.com) or contact us at [support@oakyard.com](mailto:support@oakyard.com).