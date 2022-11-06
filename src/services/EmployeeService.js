import axios from "axios";

// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"
const EMPLOYEE_API_BASE_URL = "http://emprestapi-env.eba-rsrufapw.us-east-1.elasticbeanstalk.com/api/v1/employees"

class EmployeeService {

    // Makes the post request 
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getAllEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}


export default new EmployeeService();