import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  return localStorage.getItem('isAdmin') === 'true' ? children : <Navigate to="/login" replace />
}
