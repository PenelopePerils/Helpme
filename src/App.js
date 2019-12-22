import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { SearchBar } from './components/searchbar';
// eslint-disable-next-line
class App extends Component {
  render() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="GRAYt" scroll>
            <Navigation>
                {/* <Link to="/resume">Resume</Link> */}
                {/* <Link to="/aboutme">About Me</Link> */}
                {/* <Link to="/projects">Projects</Link> */}
                <Link to="/directory">Directory</Link>
                <Link to="/podcast">Podcast</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="GRAYt">
            
            <Navigation>
            {/* <Link to="/resume">Resume</Link> */}
                {/* <Link to="/aboutme">About Me</Link> */}
                {/* <Link to="/projects">Projects</Link> */}
                {/* <Link to="/pocast">Podcast</Link> */}
                <Link to="/directory">Directory</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
<div style={{ margin: 20 }}>
<Main />
</div>
</Content>
    </Layout>
</div>
  );
}
}
export default App;
