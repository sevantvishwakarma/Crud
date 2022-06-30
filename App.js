
import './App.css';
import Nav from './components/layout/Nav';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from 'react-toastify'
import UserList from './components/UserList';
import Edit from './components/layout/Edit';


function App() {


  return (
    <>
    

    <Router>
        <Nav />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/UserList' element={<UserList  />} />
          <Route path='/UserList/edit' element={<Edit/>} />
      </Routes>
      </div>
    </Router>
    
  </>
  );
  }

export default App;
