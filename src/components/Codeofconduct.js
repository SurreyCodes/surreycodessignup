import React, { Component } from 'react';

class Codeofconduct extends Component {
    render(){
        return(
            <div>
                <Header />
                <h1>Our Code of Conduct</h1>
                    <h2>Short Version</h2>
                        <p>We all shall provide a harassment-free experience for everyone, regardless of gender, age, sexual orientation, disability, physical appearance, body size, race, or religion (or lack thereof). Sexual language and imagery is not appropriate for any event venue, including talks, workshops, parties, Twitter and other online media. Event participants violating these rules may be sanctioned or expelled from the event without a refund (if applicable) at the discretion of the SurreyCodes organizers.</p>
                    <h2>What Not to do:</h2>
                        <p>These are the rules/the things this space is not for. Breaking any of these will result in your prompt removal from SurreyCodes.</p>
                        <ul>
                            <li>No harassment, including personal attacks, offensive verbal attacks.</li>
                            <li>No spam. If Gmail wouldn't put it in my inbox, it shouldn't be in any of our channels. This includes doing attention-catching things like writing in all caps, using linkbait headlines.</li>
                            <li>No recruiting for your startup, company, job, or organization. This is not the place to pitch your business idea. (Unless it is an event dedicated to it).</li>
                            <li>No illegal/pirated content, requests for it, or information regarding the distribution of it.</li>
                        </ul>
                    <h2>What to do in case of..</h2>
                        <p>If you think some of these rules are being broken by a particular member, please notify it to your closest Organizer. Help us keep this community open and friendly.</p>
                        <p><strong>Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualized images, or other material.</strong></p>
                        <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact an organizer immediately.</p>
                        <p>Organizers will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event.</p>
                    <h2>Slack Communication Best Practices:</h2>
                        <p>Use of proper channels.</p>
                        <ul>
                            <li>#announcements: Announcements from the administrators to the community.</li>
                            <li>#community-website: Interested people that want to be part of a real world website.</li>
                            <li>#general: our main channel, all introductions are done on this channel, and mayor public conversations.</li>
                            <li>#Links-and-resources: Share relevant resources that can enrich the community's knowledge.</li>
                            <li>#Jobboard: for posting Job seeking related material, also job opportunities that could benefit other members.</li>
                            <li>#Virtualmeetup: this channel is reserved to be used whenever we have a virtual event.</li>
                            <li>#random: bad programmer jokes, or memes, invitations to beers, cats and dogs, or other content that you would like to share with the community as long as it doesn't violates the Code of Conduct.</li>
                        </ul>
                <Footer />
            </div>
        );
    }
}

export default Codeofconduct;
