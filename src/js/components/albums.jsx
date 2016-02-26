import React from 'react'

import Embed from './embed.jsx'

const Albums = ({albums}) => {
    return (
        <div>
            {Object.keys(albums).sort((a, b) => a + b).map(year => {
                return <div key={year}>
                    <div className="flex justify-center year p2 border-top border-bottom">
                        <h2 className="h2">{year}</h2>
                    </div>
                    <div className="flex justify-center p2 pt4 albums">
                        {
                            albums[year].map(album => <Embed key={album.uri} uri={album.uri} />)
                        }
                    </div>
                </div>
            })}
        </div>
    )
}

export default Albums
