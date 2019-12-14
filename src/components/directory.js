
import React from 'react';
import State from './State';
import City from './CityList';
import Stores from './Stores';
import { Switch, Route, Link } from "react-router-dom";

class Directory extends React.Component {

  render() {
    const { path } = this.props.match;
    return (
      <div>
        <div>
          <h1>Hey welcome home!</h1>
          <div className="links">
            <Link to={`${path}`} className="link">Cat</Link>
            <Link to={`${path}/dog`} className="link">Dog</Link>
            <Link to={`${path}/horse`} className="link">Horse</Link>
          </div>
          <div className="tabs">
            <Switch>
              {/* all the stores */}
              <Route path={`${path}/cities/stores`} component={Stores} />
              <Route path={`${path}/dog/cities/stores`} component={Stores} />
              <Route path={`${path}/horse/cities/stores`} component={Stores} />
              {/* all the cities route */}
              <Route path={`${path}/dog/cities`} component={City} />
              <Route path={`${path}/horse/cities`} component={City} />
              <Route path={`${path}/cities`} component={City} />
              {/* all the state routes */}
              <Route path={`${path}`} exact component={State} />
              <Route path={`${path}/dog`} component={State} />
              <Route path={`${path}/horse`} component={State} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Directory;
