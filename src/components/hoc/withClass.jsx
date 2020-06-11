import React from 'react'

// computational HOC
// works as a normal JS function that returns a function which is a functional JSX component
// takes a component as arguments along with some other (optional) arguments
const withClass = (WrappedComponent, a, b) => props => {
    return (
        <>
            <div>
                <WrappedComponent />
                Sum = {a + b}
            </div>
        </>
    )
}

export default withClass