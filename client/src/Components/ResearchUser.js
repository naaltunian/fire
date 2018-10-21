import React from 'react';
import axios from 'axios';
import Form from "./Form.js";
import Photos from "./Photos.js";

let date = new Date();
let dd = date.getDate();
let mm = date.getMonth() + 1;
let yyyy = date.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

let today = mm + '/' + dd + '/' + yyyy;

class ResearchUser extends React.Component {
    state = {
        open: false,
        date: null,
        approved: null,
        data: false
    }

    openModal = (e) => {
        e.preventDefault();
        this.setState({ open: true });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        this.setState({ date: today, open: false, approved: "Approved", data: true });
    }

    render() {
        return(
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Location</th>
                        <th scope="col">Request Data</th>
                        <th scope="col">Date Requested</th>
                        <th scope="col">Approved?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">M1: Oletta River</th>
                        <td><button onClick={this.openModal}>Click Here</button></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <th scope="row">M2: Boca Raton</th>
                        <td><button onClick={this.openModal}>Click Here</button></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <th scope="row">M3: South Beach</th>
                        <td><button onClick={this.openModal}>Click Here</button></td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                        <th scope="row">M4: Palm Beach Tech Hackathon 2018</th>
                        <td><button onClick={this.openModal}>Click Here</button></td>
                        <td>{this.state.date}</td>
                        <td>{this.state.approved}</td>
                        </tr>
                    </tbody>
                </table>
                { this.state.open === false ? true : <Form onSubmit={this.onSubmit}  /> }
                { this.state.data === false ? true : <Photos />}
            </div>
        )
    }
}

// onSubmit={this.onSubmit}

//{ this.state.data === false ? true : <Photos />}

export default ResearchUser;