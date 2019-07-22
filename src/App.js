import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

import recipes from './store/recipes'
import Recipe from './pages/recipe'

export default class CookBook extends Component {
  constructor (props) {
    super (props)
    this.state = {
      recipes: recipes
    }
  }

  render () {
    const { recipes } = this.state

    return (
      <Router>
        <div>
          <h1>Randy's Cookbook</h1>
          <ul>
            {recipes.map((recipe) =>
              <li>
                <Link to={`/recipe/${recipe.id}`}>
                {recipe.name}
                </Link>
              </li>
            )}
          </ul>

          <Switch>
            <Route path='/recipe/:id' component={Recipe} />
          </Switch>
        </div>
      </Router>
    )
  }
}
