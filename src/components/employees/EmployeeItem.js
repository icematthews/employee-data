import React, { Component } from 'react'
import { format } from 'date-fns'

class EmployeeItem extends Component {

    render() {
        const { dateJoined, salary, firstname, lastname } = this.props.employee;
        const fullName = firstname + ' ' + lastname
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'MYR',
        })
        return (

            <tbody>
                <tr>
                    <td>{fullName}</td>
                    <td>{format(new Date(dateJoined), "PPPP")}</td>
                    <td>{formatter.format(salary)}</td>
                </tr>
            </tbody>
        )
    }
}

export default EmployeeItem