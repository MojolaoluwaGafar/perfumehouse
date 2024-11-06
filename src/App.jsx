
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
