import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain"
import "./style/index.scss";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { UserContext } from "./providers/UserContext";
import { LoadingPage } from "./components/LoadingPage";

function App() {
    const {loadingUser} = useContext(UserContext);
  return (
    <div className="App">
        {loadingUser ? <LoadingPage/> :  <RoutesMain/>}
        <ToastContainer autoClose={4*1000} position="bottom-right"/>
    </div>
  )
}

export default App
