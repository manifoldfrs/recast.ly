// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      collectionOfVideos: null,
    };
    window.searchYouTube({q: 'darth vader', max: 5, key: YOUTUBE_API_KEY}, (videos) => {
      this.setState({currentVideo: videos[0], collectionOfVideos: videos});
    });
    this.onClickVideo = this.onClickVideo.bind(this);
  }
  // componentDidMount() {
  //   window.searchYouTube({q: 'darth vader', max: 5, key: YOUTUBE_API_KEY}, (videos) => {
  //     console.log('Videos: ', videos);
  //     this.setState({currentVideo: videos[0], collectionOfVideos: videos});
  //   });
  // }

  onClickVideo(e) {
    let clickedId = e.target.getAttribute('id');
    let filteredVideo = this.state.collectionOfVideos.filter(video => video.id.videoId === clickedId)[0];
    this.setState({currentVideo: filteredVideo});
  }

  render () {
    let selectedVideo = this.state.currentVideo;

    if (this.state.currentVideo === null && this.state.collectionOfVideos === null) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> view goes here</h5></div>
            </div>
          </nav>
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> Loading...</h5></div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.collectionOfVideos} clickEvent={this.onClickVideo}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
