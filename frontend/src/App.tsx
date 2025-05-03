import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingsPage from './pages/BookingPage';
import UsersPage from './pages/UserPage';
import VehiclesPage from './pages/VehiclePage';
import VehicleTypesPage from './pages/VehicleTypePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/bookings" element={<BookingsPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/vehicles" element={<VehiclesPage />} />
      <Route path="/vehicle-types" element={<VehicleTypesPage />} />
    </Routes>
  </Router>
);

export default App;