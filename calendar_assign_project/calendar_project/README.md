# 🔧 Calendar Application Backend

A robust Django REST API backend for managing calendar events with Firebase Authentication.

## 🌟 Features

### Authentication
- Firebase Authentication integration
- Custom authentication middleware
- Token verification and validation
- User-specific data isolation

### API Features
- Complete CRUD operations for calendar events
- RESTful API design
- Event filtering and pagination
- Secure user data handling

### Technical Stack
- Django 4.2
- Django REST Framework
- MySQL Database
- Firebase Admin SDK
- Python 3.8+

## 🛠️ Installation

### Prerequisites
- Python 3.8+
- MySQL 8.0+
- Firebase Admin SDK credentials

### Setup Steps

1. Clone the repository:
```bash
cd calendar_project
```

2. Create and activate virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file:
```env
DJANGO_SECRET_KEY=your-secret-key
DEBUG=True
DB_NAME=calendar_db
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_HOST=localhost
DB_PORT=3306
FIREBASE_CREDENTIALS_PATH=path/to/firebase-credentials.json
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

5. Set up MySQL database:
```sql
CREATE DATABASE calendar_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

6. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

7. Start the development server:
```bash
python manage.py runserver
```

## 📚 API Documentation

### Authentication
All endpoints require Firebase Authentication token in the header:
```
Authorization: Bearer <firebase-token>
```

### Endpoints

#### Events
```
GET    /api/events/         - List user's events
POST   /api/events/         - Create new event
GET    /api/events/{id}/    - Retrieve event details
PUT    /api/events/{id}/    - Update event
DELETE /api/events/{id}/    - Delete event
```

### Request/Response Examples

#### Create Event
```json
POST /api/events/
{
    "title": "Team Meeting",
    "description": "Weekly sync",
    "start_time": "2024-01-01T10:00:00Z",
    "end_time": "2024-01-01T11:00:00Z"
}
```

#### List Events Response
```json
GET /api/events/
{
    "count": 1,
    "results": [
        {
            "id": 1,
            "title": "Team Meeting",
            "description": "Weekly sync",
            "start_time": "2024-01-01T10:00:00Z",
            "end_time": "2024-01-01T11:00:00Z",
            "created_at": "2024-01-01T09:00:00Z",
            "updated_at": "2024-01-01T09:00:00Z"
        }
    ]
}
```


## 🔒 Security Features

- Firebase token verification
- CORS configuration
- User data isolation
- SQL injection prevention
- XSS protection

## 🧪 Testing

Run the test suite:
```bash
python manage.py test
```

## 📝 Development Notes

1. **Models**:
   - `CalendarEvent` includes proper indexing for efficient queries
   - Automatic timestamps for created_at/updated_at
   - Foreign key to user identification

2. **Views**:
   - Class-based views using ViewSets
   - Proper permission classes
   - Query optimization

3. **Authentication**:
   - Custom authentication class for Firebase
   - Token verification middleware
   - User session management



## 🔜 Future Improvements

1. Add event recurrence
2. Implement caching
3. Add API rate limiting
4. Enhance query optimization
5. Add more test coverage
