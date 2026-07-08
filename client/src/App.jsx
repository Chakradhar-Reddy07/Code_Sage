import { Routes, Route } from "react-router-dom";

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

      {/* Public Routes */}

      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard */}

      <Route path="/dashboard" element={<Dashboard />} />

      {/* Review */}

      <Route path="/review" element={<Review />} />
      <Route
        path="/review/history"
        element={<ReviewHistory />}
      />

      {/* Learning */}

      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/interview" element={<Interview />} />

      {/* User */}

      <Route path="/profile" element={<Profile />} />
      <Route
        path="/notifications"
        element={<Notifications />}
      />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />

    </Routes>
  );
}

export default App;