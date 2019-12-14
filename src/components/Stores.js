import React, { Component } from 'react';
//import { storeArray } from '../../Dummy'
import { storeArray } from './dummy'

class Stores extends Component {

    render() {
        const { city } = this.props.location.state
        const {path}  = this.props.match
         return (<div>
            <div>Here is some stores nearby <b>{city}</b>.</div>
            {
                storeArray.map((item, index) => {
                    if (item.city === city) {
                      //logic
                        return <li key={index}>{item.store}</li>
                    }
                })
            }
        </div>);
    }
}

export default Stores;