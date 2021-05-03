import React, { Component } from 'react';
import EmployeeItem from './EmployeeItem';

export class Employees extends Component {

    render() {

        return (
            <div className='container' id='table'>
                <div className='row'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th onClick={() => this.props.sortEmployees("fullName")}>Full Name</th>
                                <th onClick={() => this.props.sortEmployees("dateJoined")}>Date Joined</th>
                                <th onClick={() => this.props.sortEmployees("salary")}>Salary</th>
                            </tr>
                        </thead>
                        {this.props.employees.map(employee => (
                            <EmployeeItem employee={employee} key={employee.id} />
                        ))}

                    </table>
                </div>
            </div>
        )
    }
}

export default Employees
