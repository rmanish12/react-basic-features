import React from 'react'

// representational HOC where we can take a component as props
// do some styling
// and return a new component
const aux = props => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default aux