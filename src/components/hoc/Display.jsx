import React from 'react'

import Aux from './Aux.jsx'
import withClass from './withClass.jsx'

const display = props => {
    return (
        <Aux>
            <div>We will show sum here</div>
        </Aux>
    )
}

export default withClass(display, 10, 20)