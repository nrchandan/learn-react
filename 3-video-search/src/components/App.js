import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
  state = { term: 'cars trailer', videos: [], currentVideo: null }

  // componentDidMount() {
  //   this.onUserInput(this.state.term);
  // }

  onUserInput = async (input) => {
    console.log(input);

    this.setState({ term: input });

    const response = await youtube.get('/search', {
      params: {
        q: input
      }
    });

    this.setState({ videos: response.data.items, currentVideo: response.data.items[0] });
  }

  onVideoSelection = (index) => {
    this.setState({ currentVideo: this.state.videos[index] });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onUserInput={this.onUserInput}></SearchBar>
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.currentVideo}></VideoDetail>
          </div>
          <div className="five wide column">
            <VideoList videos={ this.state.videos } onVideoSelection={ this.onVideoSelection }></VideoList>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
