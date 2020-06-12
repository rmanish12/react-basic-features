import React from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import Topic from './Topic.jsx'

const topics = () => {

    const { path, url } = useRouteMatch()

    console.log(path, url)

    return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
    )
}

export default topics