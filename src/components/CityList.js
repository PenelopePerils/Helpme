import React, { Component } from 'react';
//import { cityArray } from './dummy'
import { cityArray} from './dummy'


class CityList extends Component {
    componentDidMount() {const { data } = this.props.location.state
    console.log(data)

    }
    render() {
        const {history,match} = this.props
        const { data } = this.props.location.state
        console.log(data)
        return (<div>
            <h3>Select a City?</h3>
            {
                cityArray.map((item, index) => {
                    if (item.state === data) {
                        return <li key={index} 
                                   onClick={() => history.push({
                                  pathname:`${match.path}/stores`,
                                  state:{
                                      city : item.city
                                  }
                        }) }>{item.city}</li>
                    }
                })
            }
        </div>);
    }
}

export default CityList;
