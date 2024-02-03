import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./pages/Main"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import NewTask from "./pages/NewTask"
import EditTask from "./pages/EditTask"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path='/main' element={<Main />} />}
      {user && <Route path="/new-task" element={<NewTask />} />}
      {user && <Route path="/edit-task/:id" element={<EditTask />} />}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  )
}

export default App