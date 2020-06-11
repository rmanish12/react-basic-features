import React from 'react'
import Parent from './lifecycle/Parent.jsx'
import DerivedState from './lifecycle/DerivedState.jsx'
import ErrorBoundary from './lifecycle/ErrorBoundary.jsx'
import MyWidget from './lifecycle/MyWidget.jsx'

import Add from './hooks/Add.jsx'

import Display from './hoc/Display.jsx'

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
                <hr />
                <Display />
            </>
        )
    }
}

export default App