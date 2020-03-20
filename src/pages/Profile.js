import React from 'react';
import Main from './Main';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       emp: []
    }
 }
  //this function returns a promise

  renderTableData() {
    return this.state.emp.map((student, index) => {
       const { id, name, age, gender, email, phoneNo } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{gender}</td>
             <td>{email}</td>
             <td>{phoneNo}</td>
          </tr>
       )
    })
 }
getEMpDetails() {
  fetch('http://localhost:3000/employee.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    this.setState({ emp:data});
    console.log(this.state.emp)
});
}
  render() {
  this.getEMpDetails()
    return (
      <div>
      <Main>
        <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
      </Main>
      </div>
    );
  }
}


export default ProfilePage;
