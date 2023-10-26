import './App.css';
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { getUser } from "../../utilities/users-service"
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import IndexPage from "../IndexPage/IngexPage";
import YarnIndexPage from "../YarnIndexPage/YarnIndexPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage"

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/yarn" element={<YarnIndexPage />}/>
          <Route path="/orders" element={<OrderHistoryPage />}/>
          <Route path="/" element={<IndexPage />}/>
          <Route path="/*" element={<Navigate to="/yarn" />} />
        </Routes>
      </>
          
          :
          <AuthPage setUser={ setUser }/>
      }
    </main>
  );
}


