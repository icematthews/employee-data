import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {

    state = {
        highestPaidEmployee: {}
    }
    static defaultProps = {
        title: '25',
        icon: 'fas fa-user-tie'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    calculateHighestEmployee = () => {

        const highest = this.props.employees.reduce(function (prev, current) {
            return (prev.salary > current.salary) ? prev : current
        }, 1)
        return highest
    }

    render() {
        return (
            <div className='container' id='navbar'>
                <div className='row'>

                    <div className='col-sm-2 text-center col-border'>
                        <h1>
                            <i className={this.props.icon} /> {this.props.employees.length}
                        </h1>
                    </div>

                    <div className='col-sm-9 text-center col-border' id='employee'>
                        <h5>Highest earning employee: {this.calculateHighestEmployee().fullName}</h5>
                        <h5>Employee Most Recently Joined: {this.props.employees[0]?.fullName}</h5>
                    </div>

                </div>
            </div>
        )
    }
}

export default Navbar;