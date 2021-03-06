# React

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Branches

  - master: basic template
  - lifecycle: lifecycle methods of class components
  - hooks: react hooks
  - hoc: higher order component
  - routing: React routing with v5.2^
  
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

##### Files in lifecycle folder
- Parent.jsx and Child.jsx: logs various life cycle methods
- DerivedState.jsx: shows how to use ```static getDerivedStateFromProps()```
- ErrorHandling.jsx and MyWidget.jsx: shows how to use ```static getDerivedStateFromError()``` and ```componentDidCatch()``` and show fallback UI in case of error

#### React hooks
Commonly used hooks are
```
useState()
useEffect()
```

##### Files in hooks folder
- Add.jsx: useState() to set two values in state
- Display.jsx: useEffect()
- 

#### React HOC
Here we show two way of using HOC.
First is where we only represent a component in a new way.
Second, where we take a component as an argument, along with other arguments, perform a logic, and return a component.

#### React Routing
Here it is shown how we can use nested routing using react routing hooks and react-router-dom