import React from 'react'

class DerivedState extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            a: 10
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        this.setState({ a: 20})
    }

    render() {
        return (
            <>
                <h3>Static getDerivedStateFromProps() example</h3>
                <ChildComponent a = {this.state.a}/>
                <button onClick={this.onClick}>Click to change state</button>
            </>
        )
    }
}

export default DerivedState

class ChildComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            a: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        // here we make a comparison
        // returns an object that updates the state
        if(props.a !== state.a) {
            return {
                a: props.a
            }
        }

        return null
    }

    componentDidUpdate(prevState, prevProps) {
        // once the object is updated, we can make further comparison
        // and then make a function call
        if(this.props.a !== prevProps.a) {
            // this.example()
        }
    }

    render() {
        return (
            <>
                <h5>Selected: {this.state.a}</h5>
            </>
        )
    }
}