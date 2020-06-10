import React from 'react'

class Child extends React.Component {

    constructor(props) {
        super(props)

        console.log('[Child.jsx] constructor')

        this.state = {
            c: 50
        }

        this.onClick = this.onClick.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Child.jsx] getDerivedStateFromProps ', props, state)

        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Child.jsx] shouldComponentUpdate ', nextProps, nextState, this.props, this.state)

        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Child.jsx] getSnapshotBeforeUpdate ', prevProps, prevState)

        return null
    }

    onClick() {
        this.setState({
            c:100
        })
    }

    render() {
        console.log('[Child.jsx] rendering...')
        return (
            <>
                <h4>Lifecycle methods</h4>
                <button onClick={this.onClick}>Click to change Child component's state</button>
            </>
        )
    }

    componentDidMount() {
        console.log('[Child.jsx] componentDidMount')
    }

    componentDidUpdate() {
        console.log('[Child.jsx] componentDidUpdate')
    }
}

export default Child