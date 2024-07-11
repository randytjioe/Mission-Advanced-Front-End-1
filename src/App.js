import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import UserProfile from './pages/UserProfile';
import Checkout from './pages/Checkout';
import Newsletter from './components/Newsletter';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/checkout/:courseId" element={<Checkout />} />
            </Routes>
          </main>
          <Newsletter />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
