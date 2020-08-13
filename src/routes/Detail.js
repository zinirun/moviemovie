import React from "react";
import YouTube from "react-youtube";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    if (location.state) {
      return (
        <div className="detail__container">
          <h1>{location.state.title}</h1>
          <YouTube
            videoId={location.state.youtube}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      );
    } else {
      return null;
    }
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.pauseVideo();
  }
}

export default Detail;
