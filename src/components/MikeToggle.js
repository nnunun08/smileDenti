import React from 'react'
import '../styles/components/MikeToggle.css' 
export default function MikeToggle({name}) {
    return (
        <div className='mikeToggle'>
            {name}
            <i>
                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 13.9852C9.77857 13.9852 11.2143 12.5495 11.2143 10.7709V3.27093C11.2143 1.49236 9.77857 0.0566406 8 0.0566406C6.22143 0.0566406 4.78571 1.49236 4.78571 3.27093V10.7709C4.78571 12.5495 6.22143 13.9852 8 13.9852Z" fill="#C0C0C0"/>
                <path d="M13.3571 10.7709C13.3571 13.7281 10.9571 16.1281 8 16.1281C5.04286 16.1281 2.64286 13.7281 2.64286 10.7709H0.5C0.5 14.5531 3.29643 17.6602 6.92857 18.1852V21.4852H9.07143V18.1852C12.7036 17.6602 15.5 14.5531 15.5 10.7709H13.3571Z" fill="#C0C0C0"/>
                </svg>
            </i>
        </div>
    )
}