import { RoutesMain } from "./routes/RoutesMain"
import "./style/index.scss";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="App">
        <RoutesMain toast={toast}/>
        <ToastContainer autoClose={4*1000} position="bottom-right"/>
    </div>
  )
}

export default App
