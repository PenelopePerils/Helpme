import React, { Component } from 'react';
import Grid from './grid';
import Cell from './cell';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid" />
                <Cell col={2} />
                <img
                    src="https://cdn.pixabay.com/photo/2018/01/15/01/38/portrait-3083009__340.jpg"
                    alt="avatar"
                    className="avatar-img"
                />
                <div>
                    <div className="banner-text">
                        <h1>Nobody Puts Us in The Corner</h1>
                        <hr />
                        <p>  Be Vibrant | Be Happy | Be You | Be Forever Young </p>

                        <div className="social-links">

                            
            <a href="https://www.linkedin.com/in/lisa-o-keefe-5b086b2a/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Youtube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a> */}
                      </div>
                    </div>
                    <Cell />
                    <Grid />
                </div>
            </div>
        )
    }
}

export default Landing;