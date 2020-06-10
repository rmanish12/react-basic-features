import React from 'react'

class MyWidget extends React.Component {

    render() {
        return (
            <>
                <h2>Widget component</h2>
            </>
        )
    }

    componentDidMount() {
        throw new Error('An error has occured')
    }
}

export default MyWidget