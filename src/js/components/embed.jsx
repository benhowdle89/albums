import React from 'react'

class Embed extends React.Component {

    render() {
        return (
            <iframe
                className="embed flex-auto mx4"
                src={`https://embed.spotify.com/?uri=spotify%3Aalbum%3A${this.props.uri}&view=coverart`}
                width="300"
                frameBorder="0"
                allowTransparency="false">
            </iframe>
        )
    }
}

export default Embed
