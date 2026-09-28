import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import AuthPage from "./pages/AuthPage"
import AdminPage from "./pages/AdminPage"
import AdminDashboard from "./pages/AdminDashboard"
import StudentDashboard from "./pages/StudentDashboard"
import TermsAndConditions from "./pages/TermsAndConditions"

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/auth"
        element={<AuthPage />}
      />

      <Route
        path="/admin"
        element={<AdminPage />}
      />

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/student/dashboard"
        element={<StudentDashboard />}
      />
      
      <Route
        path="/terms" 
        element={<TermsAndConditions />} />
    </Routes>
  )
}

export default App