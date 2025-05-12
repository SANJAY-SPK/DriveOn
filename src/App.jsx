import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import VehiclesPage from "./pages/VehiclesPage"
import BookingPage from "./pages/BookingPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import AdminDashboard from "./pages/AdminDashboard"
import UserPage from "./pages/UserPage"
import { ThemeProvider } from "./components/theme-provider"
import ContactUsPage from "./pages/ContactUsPage"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="driveon-theme">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/contact" element={<ContactUsPage/>}/>
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
