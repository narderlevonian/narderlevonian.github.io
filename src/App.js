import React from 'react'

import Icon500px from "./images/500px.svg";
import IconBandcamp from "./images/Bandcamp.svg";
import IconDribbble from "./images/Dribbble.svg";
import IconFacebook from "./images/Facebook.svg";
import IconGitHub from "./images/GitHub.svg";
import IconInstagram from "./images/Instagram.svg";
import IconLinkedIn from "./images/LinkedIn.svg";
import IconMedium from "./images/Medium.svg";
import IconTwitter from "./images/Twitter.svg";
import IconYouTube from "./images/YouTube.svg";

import './App.css';

const Name = "Nar der Levonian";
const Description = "Interface Designer / Software Developer";
const Info = "I am engaged in visionary art (experimental music, Neues Sehen photography, and (de)generative art), gonzo journalism, and the Romanization of the Russian language.";
const LinksTitle = "Get in touch with me:";
const LinksArray = [
    {
        Icon: IconInstagram,
        Link: "http://instagram.com/narderlevonian"
    },
    {
        Icon: IconFacebook,
        Link: "https://www.facebook.com/profile.php?id=100089061914813"
    },
    {
        Icon: IconTwitter,
        Link: "http://twitter.com/narderlevonian"
    },
    {
        Icon: IconLinkedIn,
        Link: "https://www.linkedin.com/in/narderlevoniani"
    },
    {
        Icon: IconMedium,
        Link: "https://medium.com/@narderlevonian"
    },
    {
        Icon: Icon500px,
        Link: "http://500px.com/narderlevonian"
    },
    {
        Icon: IconBandcamp,
        Link: "http://narderlevonian.bandcamp.com"
    },
    {
        Icon: IconYouTube,
        Link: "http://youtube.com/@narderlevoniani"
    },
    {
        Icon: IconGitHub,
        Link: "http://github.com/narderlevonian"
    },
    {
        Icon: IconDribbble,
        Link: "http://dribbble.com/narderlevonian"
    },
]

function Links() {
    return LinksArray.map((item, i) => {
        return (
            <a className="Div-LinkItem" href={item.Link} target="_blank" rel="noopener noreferrer">
                <img className="Div-LinkItem-Image" src={item.Icon} alt="Link" />
            </a>
        );
    });
}

function App() {
    return (
        <div className="Main">
            <p className="Paragraph-Name">{Name}</p>
            <p className="Paragraph-Description">{Description}</p>
            <p className="Paragraph-Info">{Info}</p>
            <p className="Paragraph-Links">{LinksTitle}</p>
            <div className="Div-Links">
                {Links()}
            </div>
        </div>
    );
}

export default App;
