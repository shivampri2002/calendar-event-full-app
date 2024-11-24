import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { CalendarView } from './components/calendar/CalendarView';
import { LoginForm } from './components/auth/LoginForm';
import { MainLayout } from './components/layout/MainLayout';

import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainLayout>
                  <CalendarView />
                </MainLayout>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;