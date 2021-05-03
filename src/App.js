import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Employees from './components/employees/Employees';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const sortDate = data.sort((a, b) => new Date(b.dateJoined) - new Date(a.dateJoined))
        this.setState({ employees: sortDate })
      })
      .catch(error => console.log(error))
  }

  sortEmployees = (field) => {
    let sortedEmployees = [...this.state.employees];

    if (field === "fullName") {
      sortedEmployees.sort((a, b) => b.fullName > a.fullName ? 1 : (a.fullName > b.fullName ? -1 : 0));
    } else if (field === "salary") {
      sortedEmployees.sort((a, b) => b.salary - a.salary);
    } else {
      sortedEmployees.sort((a, b) => new Date(b.dateJoined) - new Date(a.dateJoined));
    }

    this.setState({ employees: sortedEmployees });
  }

  render() {
    return (
      <div className='App'>
        <Navbar employees={this.state.employees} />
        <Employees employees={this.state.employees} sortEmployees={this.sortEmployees} />
      </div>
    );
  }
}

export default App;
