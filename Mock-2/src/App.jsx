import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";

function App(){
  return(
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
      <Route path="*" element={<Login/>}/>
      
      

    </Routes>
  );
}
export default App;
