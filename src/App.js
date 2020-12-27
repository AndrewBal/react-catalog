import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import ProductList from './containers/ProductList/ProductList'
import Product from './components/Product/Product'
import Auth from './containers/Auth/Auth'
import ProductCreator from './containers/ProductCreator/ProductCreator'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/product-creator" component={ProductCreator} />
          <Route path="/product/:id" component={Product} />
          <Route path="/" component={ProductList} />
        </Switch>
      </Layout>
    )
  }
}

export default App
