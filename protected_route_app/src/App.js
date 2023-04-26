import Home from "./Home";
import Login from "./Login";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import './App.css'
function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={
        <ProtectedRoute>
        <Home/>
        </ProtectedRoute>
     }/>
        <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;