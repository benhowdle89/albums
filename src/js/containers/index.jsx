import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import groupBy from 'lodash.groupby'

import Header from './../components/header.jsx'
import Footer from './../components/footer.jsx'
import Albums from './../components/albums.jsx'

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Albums albums={this.props.albums} />
                <Footer />
            </div>
        )
    }
}

Index.propTypes = {
    albums: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        albums: groupBy(state.spotifyState.albums, 'year')
    }
}

export default connect(mapStateToProps, null)(Index)
