import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


const AddEmployee = () => {
    // document.getElementById("error").disabled = true; 
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailID: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value; 
        setEmployee({...employee, [e.target.name]: value});
    };

    const saveEmployee = (e) => {
        e.preventDefault(); // Stop the refreshing of the page 
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList");
        }).catch((error) => {
            console.log(error);
            console.log("User already there");
            navigate("/employeeList/userAlreadyThere");
        });
    };

    const reset = (e) => {
        e.preventDefault(); // Stop the refreshing of the page 
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailID: "",
        });
    };

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            
            <div className='font-thin text-2xl tracking-wider '> 
                <h1>Add new Employee</h1>
            </div>

            {/* First Name  */}
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name:</label>
                <input 
                type='text' 
                name='firstName'
                value={employee.firstName}
                onChange={(e) => handleChange(e)} 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            {/* Last Name  */}

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name:</label>
                <input 
                type='text' 
                name='lastName'
                value={employee.lastName}
                onChange={(e) => handleChange(e)} 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            
            {/* Email  */}

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email:</label>
                <input 
                type='email' 
                name='emailID'
                value={employee.emailID}
                onChange={(e) => handleChange(e)} 
                className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            {/* Email  */}
            <div className='items-center justify-center h-14 w-full my-4 pt-4 space-x-4'>
                <button
                    onClick={saveEmployee} 
                    className='rounded text-white font-semibold bg-blue-400 py-2 px-6 hover:bg-blue-700' >
                    Save
                </button>

                <button 
                onClick={reset}
                className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700' >
                    Clear
                </button>

            </div>


        </div>
    </div>
  )
}

export default AddEmployee