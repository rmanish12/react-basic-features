import React from 'react'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.setState({
            name: 'randome'
        })
    }

    render() {
        return(
            <h1>Test Application</h1>
        )
    }
}

export default App