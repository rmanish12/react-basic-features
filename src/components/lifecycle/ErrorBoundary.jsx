import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // update state so that the next render will show fallback UI
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        if(this.state.hasError) {
            return <h2>Something went wrong</h2>
        }

        return this.props.children
    }
}

export default ErrorBoundary