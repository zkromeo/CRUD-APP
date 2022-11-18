import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./Component/Layout/Navbar";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Home from "./Component/Pages/Home";
import Adduser from "./Component/Users/Adduser";
import EditUser from "./Component/Users/EditUser";
import User from "./Component/Users/User";
import PageNotFound from "./Component/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

 



function App() {
  return (
      <div className="App">
    <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path ="/" element= {<Home/>} ></Route>
          <Route  path ="/About" element= {<About/> } ></Route>
          <Route  path ="/Contact" element= {<Contact/> } ></Route>  
          <Route  path ="/user/add" element= {<Adduser/> } ></Route>  
          <Route  path ="/user/edit/:id" element= {<EditUser/> } ></Route>  
          <Route  path ="/user/:id" element= {<User/> } ></Route>  
          
           <Route  path ="*" element= {<PageNotFound /> } ></Route>  
        </Routes>
       
        
        
    </BrowserRouter>
      </div>
  );
}

export default App;
