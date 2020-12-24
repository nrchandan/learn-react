import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onUserInput(this.state.term);
  }

  componentDidMount() {
    const defaultSearchTerm = 'spacex'
    this.setState({ term: defaultSearchTerm });
    this.props.onUserInput(defaultSearchTerm);
  }

  onUserInput = (event) => {
    this.setState({ term: event.target.value })
  }

  render() {
    return (
        <div className="ui segment">
          <form onSubmit={ this.onFormSubmit } className="ui form">
            <div className="field">
              <label>Video Search</label>
              <input type="text" value={ this.state.term } onChange={ this.onUserInput } ></input>
            </div>
          </form>
        </div>
    )
  }
}

export default SearchBar;
