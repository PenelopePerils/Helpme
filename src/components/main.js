import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import LandingPage from './landingpage';
//import AboutMe from './aboutme';
import Contact from './contact';
//import Projects from './projects';
//import Resume from './resume';
import Podcast from './podcast';
import Directory from './directory';
import Shop from './shop';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage} />
                {/* <Route path="/aboutme" component={AboutMe} /> */}
                <Route path="/contact" component={Contact} />
                {/* <Route path="/projects" component={Projects} /> */}
                {/* <Route path="/resume" component={Resume} /> */}
                <Route path="/podcast" component={Podcast} />
                <Route path="/directory" component={Directory} />
                <Route path="/shop" component={Shop} />
            </Switch >
        )
    }
}


export default withRouter(Main);