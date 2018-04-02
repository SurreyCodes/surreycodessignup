import React, { Component } from 'react';

class Volunteer extends Component {
    render(){
        return(
            <div>
                <Header />
                <h1>Volunteer at a tech nonprofit</h1>
                <p>The perks of volunteering at SurreyCodes are limitless</p>
                <ul>
                    <li>Gain hands on experience</li>
                    <li>Be at the edge of new emerging technology</li>
                    <li>Use the tools that all tech companies use</li>
                    <li>Build a network on steroids</li>
                    <li>Create stories that will last forever</li>
                    <li>Learn to fail in a fail-safe environment</li>
                </ul>
                <h1>What Volunteering in a tech non-profit looks like:</h1>
                <blockquote><p>I started SurreyCodes to build the experience gap that my resume required.
                    I continue with the volunteering because it's a non stop rewarding experience</p> -Luis Espinal</blockquote>
                <Footer/>
            </div>
        );
    }
}

export default Volunteer;
