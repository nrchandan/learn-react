import React from 'react';

class App extends React.Component {
  state = {
    images: [
      "https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTIxMTh8MHwxfHNlYXJjaHwyfHxzcGFjZXh8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1484600996405-3f72130ce59f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1525&q=80",
      "https://images.unsplash.com/photo-1608483306449-f7adaf379e59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      "https://images.unsplash.com/photo-1608499500238-1536c6dd482f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    ],
    currentImageIndex: 0
  }
  
  switchImage = () => {
    if (this.state.currentImageIndex === 4) {
      this.setState({ currentImageIndex: 0 });
    } else {
      this.setState({ currentImageIndex: this.state.currentImageIndex + 1 });
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={this.switchImage}>Switch image </button>
        {this.state.currentImageIndex}
        <div>
          <img alt="random" src={this.state.images[this.state.currentImageIndex]}></img>
        </div>
      </div>
    )
  }
}

export default App;
