import React, { Component } from 'react';

class Learn extends Component {
    render(){
        return(
        <div className="mainContent">
            <h1>Learn to Code</h1>
            <p>While helping british columbia's non profits<br/>
                Thru a project-based learning curriculum</p>
              <form id="mainForm">
                <input type="text" name="firstname" value={'First Name'}/>
                <input type="text" name="lastname" value={'Last Name'}/>
                <input type="text" name="email" value={'hello@example.com'}/>
                <input type="text" name="phone number" value={'phone number 604-555-5555'}/>
                <input type="button" onClick={'submit'} value="Continue Application"/>
            </form>
        </div>
    );
    }
    }

    export default Learn;
