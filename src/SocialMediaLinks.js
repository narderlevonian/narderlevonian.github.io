import React, {Component} from 'react'
import SocialMediaLinksArray from './SocialMediaLinksArray'

import './SocialMediaLinks.css'

class SocialMediaLinks extends Component {
    render() {
        return (
            <div className='Div-SocialMedia-Links'>
                {
                    SocialMediaLinksArray.map((item, i) => {
                        return (
                            <a className='Div-SocialMedia-LinkItem' href={item.Link} target='_blank' rel='noopener noreferrer'>
                                <img className='Image-SocialMedia-LinkItem' src={item.Icon} alt='Link' />
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default SocialMediaLinks
