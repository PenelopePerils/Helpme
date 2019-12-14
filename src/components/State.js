import React, { Component } from 'react';
import { stateArray } from './dummy';
import { withRouter } from 'react-router-dom'
class State extends Component {
    render() {
        const { history, match } = this.props
        console.log(match.path)
        return (
            <div>
                <h3>Select a state?</h3>
                <ul>
                    {
                        stateArray.map((state, index) => (
                            <li onClick={() => history.push({
                                pathname: `${match.path}/cities`,
                                state: {
                                    data: state
                                }
                            })} key={index}>
                                <a> {state}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }

}

export default withRouter(State);

// Alabama
// Alaska
// American Samoa
// Arizona
// Arkansas
// California
// Colorado
// Connecticut
// Delaware
// District of Columbia
// Florida
// Georgia
// Guam
// Hawaii
// Idaho
// Illinois
// Indiana
// Iowa
// Kansas
// Kentucky
// Louisiana
// Maine
// Maryland
// Massachusetts
// Michigan
// Minnesota
// Mississippi
// Missouri
// Montana
// Nebraska
// Nevada
// New Hampshire
// New Jersey
// New Mexico
// New York
// North Carolina
// North Dakota
// Northern Mariana Islands
// Ohio
// Oklahoma
// Oregon
// Pennsylvania
// Puerto Rico
// Rhode Island
// South Carolina
// South Dakota
// Tennessee
// Texas
// Utah
// Vermont
// Virgin Islands
// Virginia
// Washington
// West Virginia
// Wisconsin
// Wyoming