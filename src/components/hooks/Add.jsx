import React, { useState } from 'react'

import Display from './Display.jsx'

const add = () => {

    const [a, setA] = useState(10)
    const [b, setB] = useState(20)

    return (
        <>
            <Display a={a} b={b}/>
        </>
    )
}

export default add