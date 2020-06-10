import React from 'react'

import Child from './Child.jsx'

class Parent extends React.Component {

    constructor(props) {
        super(props)

        console.log('[Parent.jsx] constructor')

        this.state = {
            a: 10,
            b: 20
        }

        this.onClick = this.onClick.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Parent.jsx] getDerivedStateFromProps ', props, state)

        return null
    }

    onClick() {
        this.setState({
            a: 30
        })
    }

    render() {
        console.log('[Parent.jsx] rendering...')
        return (
            <>
                <button onClick={this.onClick}>Click here to change props for Child component</button>
                <Child a = {this.state.a}/>
            </>
        )
    }

    componentDidMount() {
        console.log('[Parent.jsx] componentDidMount')
    }
}

export default Parent