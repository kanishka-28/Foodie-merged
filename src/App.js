import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Delivery from "./pages/Delivery/Delivery";
import Master from "./pages/Home/Deciding";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path ="/" element={<Navigate to="/home/delivery" />} />
          <Route path ="/home" element={<Home/>} >
            <Route index element={<Navigate to="/home/delivery" />  } />
            <Route path=":type" element={<Master/>} />
          </Route>
          <Route path="/restaurant/:id"  element={<h1>restaurant</h1>}/>
            <Route path="*" element={<h1>Error no page found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
