import React, { useEffect } from 'react'

const display = props => {

    useEffect(() => {
        console.log(props)

        // we can use return function() {} for clean up activities
        // it will be called after each render cycle
        return () => {
            console.log('cleanup activity can go here')
        }
    }, [])
    // in the array, we can pass the varibales on whose change we want to call the callback function
    // if not passed any value, it will be called for every update cycle
    // if passed an empty array, it will execute once like componentDidMount()

    return (
        <>
            {props.a + props.b}
        </>
    )
}

export default display