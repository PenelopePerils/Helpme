import React, { Component } from 'react';
import SearchResults from 'react-filter-search';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Lisa',
          age: 28
        }, {
          name: 'Devid',
          age: 19
        }
      ],
      value: ''
    };
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <SearchResults
          value={value}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.name}</span>
                  <span>{el.email}</span>
                </div>
              ))}
            </div>
          )}
        />
      </div>
    );
  }
}