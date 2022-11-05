import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import AddEmployeeAlreadyThere from './components/AddEmployeeAlreadyThere';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';

function App() {
  return ( // JXS Language 
    // Empty Tags allow for the code to be fragmented 
    <> 
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route index element={<EmployeeList/>} />
            <Route path="/" element={<EmployeeList/>} />
            <Route path="/employeeList" element={<EmployeeList/>} />
            <Route path="/addEmployee" element={<AddEmployee/>} />
            <Route path="/employeeList/userAlreadyThere" element={<AddEmployeeAlreadyThere/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;