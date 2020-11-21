import React, { Component } from "react";
import employees from "../employees/employees";

class GetEmployees extends Component {
    constructor(props){
        super(props);
        this.state = {
            employees: employees
        };
    }
    render() {
        const {employees} = this.state;
        return(
            <div>
                <ol className="item">
                {
                    employees.map(employee => (
                        <li key={employee.id} align="start">
                            <div>
                                <p className="title">Name: {employee.firstName} {employee.lastName}</p>
                                <p className="body">Age: {employee.age}</p>
                                <p className="body">JobTitle: {employee.department}</p>
                                <p className="body">Position: {employee.position}</p>
                            </div>
                        </li>
                    )) 
                }
                </ol>
            </div>
        );
    }
  }
  export default GetEmployees;







