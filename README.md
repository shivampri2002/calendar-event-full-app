# 📅 Full Stack Calendar Application

A modern, full-stack calendar application built with React (Frontend) and Django (Backend), featuring real-time event management and Firebase Authentication.

![Calendar Demo](https://drive.google.com/uc?id=1D6YPMnP-A0c-M7Yu1j8VBx0LuOmjjl5d)

## 🌟 Key Features

### User Interface
- Intuitive calendar interface using `react-big-calendar`
- Responsive design with Tailwind CSS
- Modern, clean UI components
- Real-time updates

### Authentication
- Firebase Authentication integration
- Email/Password and Google Sign-in
- Secure token management
- Protected routes

### Event Management
- Create, read, update, and delete events
- Event details include title, date & time, description
- User-specific calendars
- Form validation with Zod

## 🏗️ Technology Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS
- react-big-calendar
- Firebase Authentication
- react-hook-form with Zod
- Axios

### Backend
- Django 4.2
- Django REST Framework
- MySQL Database
- Firebase Admin SDK

## 📦 Installation

### Prerequisites
- Node.js 16+
- Python 3.8+
- MySQL 8.0+
- Firebase project credentials

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd calendar_event_app_frontend/calendar-event-app
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env`:
```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
```

4. Start development server:
```bash
npm start
```

### Backend Setup

1. Navigate to backend directory:
```bash
cd calendar_assign_project/calendar_project
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env`:
```env
DJANGO_SECRET_KEY=your-secret-key
DEBUG=True
DB_NAME=calendar_db
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_HOST=localhost
DB_PORT=3306
FIREBASE_CREDENTIALS_PATH=path/to/firebase-credentials.json
```

5. Set up database:
```sql
CREATE DATABASE calendar_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

6. Run migrations:
```bash
python manage.py migrate
```

7. Start backend server:
```bash
python manage.py runserver
```

## 🏛️ Architecture

```
calendar-event-full-app/
├── calendar_event_app_frontend/calendar-event-app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── calendar/
│   │   │   └── common/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
│
└── calendar_assign_project/calendar_project/
    ├── calendar_api/
    │   ├── views.py
    │   ├── models.py
    │   └── serializers.py
    └── manage.py
```

## 🔄 Application Flow

1. **Authentication**:
   - User signs in using Firebase Authentication
   - Frontend stores authentication token
   - Backend validates token for API requests

2. **Event Management**:
   - Frontend makes API calls with authentication token
   - Backend validates user and processes requests
   - Real-time updates in the UI

3. **Data Flow**:
   - React components → API Services → Django Backend
   - Django Backend → Database → API Response → React UI

## 🔐 Security Features

- Firebase Authentication
- Token validation
- CORS configuration
- SQL injection prevention
- XSS protection
- User data isolation

## 🌐 API Endpoints

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
cd calendar_event_app_frontend/calendar-event-app
npm test
```

### Backend Tests
```bash
cd calendar_assign_project/calendar_project
python manage.py test
```

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. Connect GitHub repository
2. Configure environment variables
3. Deploy through Vercel dashboard

## 📝 Development Notes

1. **Frontend Highlights**:
   - Modular component structure
   - Custom hooks for API calls
   - Form validation with Zod
   - Responsive design

2. **Backend Highlights**:
   - RESTful API design
   - Efficient database queries
   - Proper error handling
   - Authentication middleware

## 📈 Future Improvements

1. Add event sharing
2. Implement notifications
3. Add calendar export
