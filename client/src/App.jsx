import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/auth/ProtectedRoute";

// Public Pages
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// Protected Pages
import Dashboard from "./pages/Dashboard";
import Review from "./pages/Review";
import ReviewHistory from "./pages/ReviewHistory";
import Roadmap from "./pages/Roadmap";
import Analytics from "./pages/Analytics";
import Interview from "./pages/Interview";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        }
      />

      <Route
        path="/review"
        element={
          <ProtectedRoute><Review /></ProtectedRoute>
        }
      />

      <Route
        path="/review/history"
        element={
          <ProtectedRoute><ReviewHistory /></ProtectedRoute>
        }
      />

      <Route
        path="/roadmap"
        element={
          <ProtectedRoute><Roadmap /></ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute><Analytics /></ProtectedRoute>
        }
      />

      <Route
        path="/interview"
        element={
          <ProtectedRoute><Interview /></ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        }
      />

      <Route
        path="/notifications"
        element={
          <ProtectedRoute><Notifications /></ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute><Settings /></ProtectedRoute>
        }
      />

      <Route
        path="/help"
        element={
          <ProtectedRoute><Help /></ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;