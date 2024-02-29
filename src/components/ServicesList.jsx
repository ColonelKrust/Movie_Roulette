import React from 'react'
import '../styles/wheelStyle.css'

function ServicesList (props) {
    const services = props.streamingServices
    const baseURL = 'https://image.tmdb.org/t/p/original'
    const serviceImageURL = {
        'netflix': '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
        'hulu': '/pqUTCleNUiTLAVlelGxUgWn1ELh.png',
        'prime': '/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png',
        'hbo': '/nmU0UMDJB3dRRQSTUqawzF2Od1a.png',
        'disney': '/uzKjVDmQ1WRMvGBb7UNRE0wTn1H.png',
        'peacock': '/gIAcGTjKKr0KOHL5s4O36roJ8p7.png',
        'apple': '/4KAy34EHvRM25Ih8wb82AuGU7zJ.png',
        'paramount': '/fi83B1oztoS47xxcemFdPMhIzK.png'
    }

    return(
        services.map((service) => {
            const logoURL = baseURL + serviceImageURL[service]
            console.log(services)
            const altText = 'Streaming service logo for ' + service
            if (serviceImageURL[service]) {
                return (<img key={service} className='streamingLogos' src={logoURL} alt={altText} />)
            } else {
                return (<p className='serviceNoLogo'>{service}</p>)
            }
        })
    )
}

export default ServicesList