import React from 'react'

const Embed = ({uri}) => {
    return (
        <iframe
            className="embed flex-auto mx4"
            src={`https://embed.spotify.com/?uri=spotify%3Aalbum%3A${uri}&view=coverart`}
            width="300"
            frameBorder="0"
            allowTransparency="true">
        </iframe>
    )
}

export default Embed
