import React from 'react'
import Parent from './lifecycle/Parent.jsx'
import DerivedState from './lifecycle/DerivedState.jsx'
import ErrorBoundary from './lifecycle/ErrorBoundary.jsx'
import MyWidget from './lifecycle/MyWidget.jsx'

import Add from './hooks/Add.jsx'

class App extends React.Component {

    render() {
        return (
            <>
                {/* <Parent title="Parent component" />
                <hr/>
                <DerivedState />
                <hr/>
                <ErrorBoundary>
                    <MyWidget />
                </ErrorBoundary>
                <hr/> */}
                <Add />
            </>
        )
    }
}

export default App