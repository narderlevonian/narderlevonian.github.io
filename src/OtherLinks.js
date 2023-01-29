import React, {Component} from 'react'
import OtherLinksArray from './OtherLinksArray'

import './OtherLinks.css'

export function GetOtherLinks() {
    return OtherLinksArray.map((item, i) => {
        return (
            <a className='A-Other-LinkItem' href={item.Link} target='_blank' rel='noopener noreferrer'> {item.Caption}</a>
        )
    })
}

class OtherLinks extends Component {
    render() {
        return (
            <div className='Div-Other-Links'>
                {GetOtherLinks()}
            </div>
        )
    }
}

export default OtherLinks
