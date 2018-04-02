import React, { Component } from 'react';

class Sponsor extends Component {
    render(){
        return(
            <div>
                <Header />
                <h1>You do want to be part of this!</h1>
                <p>Sponsoring the SurreyCodes Community could mean the difference
                    between <a href="#">Johanna starving or having a meal today</a>.</p>
                <p>Sponsoring us could be the difference between
                    filling 4,320 new software engineer jobs by 2020 with local
                    specialized talent or having local high level tech talent.</p>
                <button>See our Sponsor Package</button>
                <Footer />
            </div>
        );
    }
}

export default Sponsor;
