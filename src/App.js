
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import Home from "./component/Home";

import Naaav from "./component/Naaav";
import Page1 from "./component/Page-1";
import Taabel from "./component/Taabel";



function App() {
  return (
    <div>
    <Naaav/>
    
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/umar" element={<Page1/>} />
          <Route path="/umar2" element={<Taabel/>} />
        
          
          
        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
