import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'
import OtherLinks from './OtherLinks'

import './App.css'

const NameText = 'Nar der Levonian'
const DescriptionText = 'Interface Designer and Software Engineer'
const InfoText = 'I am engaged in visionary art (experimental music, Neues Sehen photography, and (de)generative art), gonzo journalism, and the Romanization of the Russian language.'
const LinksTitleText = 'Get in touch with me:'
const OtherText = 'Other:'

function App() {
    return (
        <div className='Main'>
            <p className='Paragraph-Name'>{NameText}</p>
            <p className='Paragraph-Description'>{DescriptionText}</p>
            <p className='Paragraph'>{InfoText}</p>
            <p className='Paragraph'>{LinksTitleText}</p>
            <SocialMediaLinks />
            <p className='Paragraph'>{OtherText}</p>
            <OtherLinks />
        </div>
    )
}

export default App
