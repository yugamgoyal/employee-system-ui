import React, {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import EmployeeRecord from './EmployeeRecord';

const EmployeeList = () => {

const navigate = useNavigate();


// Not gonna lie wtf is this? 
const [loading, setLoading] = useState(true);
const [employees, setEmployees] = useState(null);

useEffect(() => { // runs everytimeit renders  
    const fetchData = async () => {
        setLoading(true); 
        try {
            const response = await EmployeeService.getAllEmployees();
            setEmployees(response.data);
        } catch(error) {
            console.log(error);
        }
        setLoading(false); 
    };
    fetchData();
}, []);


return (
  <div className="container mx-auto my-8">
    <div className="h-12">
        <button 
        onClick={() => navigate("/addEmployee")}
        className="rounded bg-slate-600 text-white px-6 py-2 font-semibold" >
            Add Employee
        </button>
    </div>

    <div className="flex shadow border-bottom">
        <table className="min-w-full">
            <thead className="bg-gray-50">
                <tr>
                    <th className='text-left font-medium text-gray-500 uppercase tracking py-3 px-6'> First Name </th>
                    <th className='text-left font-medium text-gray-500 uppercase tracking py-3 px-6'> Last Name </th>
                    <th className='text-left font-medium text-gray-500 uppercase tracking py-3 px-6'> Email </th>
                    <th className='text-right font-medium text-gray-500 uppercase tracking py-3 px-6'> Actions </th>
                </tr>
            </thead>

            {!loading && (
            <tbody className='bg-white'>
                {employees.map((employee) => (
                    //  Passes a parameter to another component 
                    <EmployeeRecord employee={employee} key={employee.id}></EmployeeRecord>
                ))}
            </tbody>
            )}
        </table>
    </div>

  </div>
);
}

export default EmployeeList