import React from 'react';

const Form = (props) => {
    return(

        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" placeholder="Enter Full Name" type="text" name="name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" placeholder="Enter Email Address" type="text" name="name" />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input className="form-control" placeholder="Enter Phone Number" type="text" name="name" />
            </div>
            <div className="form-group">
                <label>Purpose</label>
                <input className="form-control" placeholder="Research" type="text" name="name" />
            </div>
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
    )
}

export default Form;

/* <form> */
            //     <div className="form-group">
            //         <label for="exampleInputPassword1">Full Name</label>
            //         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Full Name" />
            //     </div>
            //     <div>
            //         <label for="exampleInputEmail1">Email address</label>
            //         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            //     </div>
            //     <div className="form-group">
            //         <label for="exampleInputPassword1">Phone Number</label>
            //         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Phone Number" />
            //     </div>
            //     <div className="form-group">
            //         <label for="exampleInputPassword1">Purpose</label>
            //         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Purpose" />
            //     </div>                
            //     <input onSubmit={props.onSubmit} type="submit" className="btn btn-primary">Submit</input>
            // </form>