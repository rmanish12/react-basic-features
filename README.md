# React

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Branches

  - master: basic template
  - lifecycle: lifecycle methods of class components
  
#### LifeCycle methods

```
1. constructor()
2. static getDerivedStateFromProps(props, state)
3. render()
4. componentDidMount()
5. shouldComponentUpdate(nextProps, nextUpdate)
6. getSnapshotBeforeUpdate(prevProps, prevState)
7. componentDidUpdate(prevProps, prevState, snapshot)
8. componentWillUnmount()
9. static getDerivedStateFromError(error)
10. componentDidCatch(error, errInfo)
```

### Files in lifecycle folder
- Parent.jsx and Child.jsx: logs various life cycle methods
- DerivedState.jsx: shows how to use ```static getDerivedStateFromProps()```
- ErrorHandling.jsx and MyWidget.jsx: shows how to use ```static getDerivedStateFromError()``` and ```componentDidCatch()``` and show fallback UI in case of error