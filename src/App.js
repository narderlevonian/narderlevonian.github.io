import React from 'react'

import './App.css';

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

import ResumePDF from "./pdf/Nar-der-Levonian-CV.pdf";

const NameText = "Nar der Levonian";
const DescriptionText = "Interface Designer and Software Engineer";
const InfoText = "I am engaged in visionary art (experimental music, Neues Sehen photography, and (de)generative art), gonzo journalism, and the Romanization of the Russian language.";
const LinksTitleText = "Get in touch with me:";
const OtherText = "Other:";

const SocialMediaLinksArray = [
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

const OtherLinksArray = [
    {
        Link: "mailto:narderlevonian@hotmail.com",
        Caption: "Email Me"
    },
    {
        Link: {ResumePDF},
        Caption: "Download CV/Resume"
    }
]

function GetSocialMediaLinks() {
    return SocialMediaLinksArray.map((item, i) => {
        return (
            <a className="Div-SocialMedia-LinkItem" href={item.Link} target="_blank" rel="noopener noreferrer">
                <img className="Image-SocialMedia-LinkItem" src={item.Icon} alt="Link" />
            </a>
        );
    });
}

function GetOtherLinks() {
    return OtherLinksArray.map((item, i) => {
        return (
            <a className="A-Other-LinkItem" href={item.Link} target="_blank" rel="noopener noreferrer"> {item.Caption}</a>
        );
    });
}

function App() {
    return (
        <div className="Main">
            <p className="Paragraph-Name">{NameText}</p>
            <p className="Paragraph-Description">{DescriptionText}</p>
            <p className="Paragraph">{InfoText}</p>
            <p className="Paragraph">{LinksTitleText}</p>
            <div className="Div-SocialMedia-Links">
                {GetSocialMediaLinks()}
            </div>
            <p className="Paragraph">{OtherText}</p>
            <div className="Div-Other-Links">
                {GetOtherLinks()}
            </div>
        </div>
    );
}

export default App;
