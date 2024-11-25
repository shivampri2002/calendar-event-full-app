# 📅 Modern Calendar Application

A full-stack calendar application built with React and Django, featuring real-time event management and seamless user authentication.

![Calendar Demo](https://drive.google.com/uc?id=1_le17TWEBZPWRtu7VbJ0jTvr9twZLwNZ)

## ✨ Features

### Authentication
- Firebase Authentication integration
- Email/Password and Google Sign-in options
- Protected routes for authenticated users
- Persistent user sessions

### Calendar Management
- Interactive calendar interface using `react-big-calendar`
- Create, read, update, and delete events
- Event details include:
  - Title
  - Date & Time
  - Description
- Real-time updates
- User-specific event isolation

### Technical Highlights
- **Frontend**: React with TypeScript
- **Backend**: Django REST Framework
- **Database**: PostgreSQL
- **Authentication**: Firebase
- **Form Handling**: react-hook-form with Zod validation
- **Styling**: Tailwind CSS
- **API Communication**: Axios

## 🚀 Live Demo

Visit the application: [Calendar App](https://your-deployed-app-url.com)

## 🛠️ Technology Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- react-big-calendar
- react-hook-form
- Zod
- Firebase Authentication
- Axios

### Backend
- Django 4.2
- Django REST Framework
- PostgreSQL
- Django REST Framework JWT

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- Firebase account

### Frontend Setup

1. Clone the repository:
```bash
cd calendar-event-app
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
```

4. Start the development server:
```bash
npm run dev
```


## 🔐 Authentication Flow

1. User signs in using email/password or Google authentication
2. Firebase handles the authentication process
3. Backend validates Firebase token
4. User receives access to their personal calendar

## 📱 Core Components

### CalendarView
- Main calendar interface
- Displays events in a monthly/weekly/daily view
- Handles event creation through click interactions

### EventModal
- Form for creating/editing events
- Zod validation for form inputs
- Real-time validation feedback

### Authentication Components
- Login form with multiple sign-in options
- Protected route wrapper
- Authentication context provider

## 🔄 State Management

- Firebase Authentication state managed through Context API
- Event data fetched and cached using custom hooks
- Form state handled by react-hook-form

## 🚥 API Endpoints

```
GET    /api/events/         - List user's events
POST   /api/events/         - Create new event
GET    /api/events/{id}/    - Retrieve event details
PUT    /api/events/{id}/    - Update event
DELETE /api/events/{id}/    - Delete event
```

## 🧪 Testing

### Frontend Tests
```bash
npm test
```

## 📝 Development Decisions

1. **Firebase Authentication**: Chosen for its reliability and ease of implementation, reducing the complexity of user management.

2. **Tailwind CSS**: Used for rapid UI development and consistent styling across components.

3. **TypeScript**: Implemented for better type safety and improved development experience.

4. **Zod Validation**: Ensures robust form validation with runtime type checking.

## 🚀 Deployment

The application is deployed using:
- Frontend: Vercel
- Database: Avien MySQL

## 📈 Future Improvements

1. Add event reminders and notifications
2. Implement event sharing between users
3. Add calendar export functionality
4. Add unit and integration tests
