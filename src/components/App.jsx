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
      currentVideo: window.exampleVideoData[0],
      collectionOfVideos: [],
      q: 'Darth Vader',
      max: 5,
      key: YOUTUBE_API_KEY
    };
    // window.searchYouTube({q: 'darth vader', max: 5, key: YOUTUBE_API_KEY}, (videos) => {
    //   this.setState({currentVideo: videos[0], collectionOfVideos: videos});
    // });
    this.onClickVideo = this.onClickVideo.bind(this);
  }

  componentDidMount() {
    let options = {
      query: this.state.q,
      max: this.state.max,
      key: this.state.key
    };
    this.props.searchYouTube(options, (items) => {
      this.setState({
        currentVideo: items[0],
        collectionOfVideos: items
      });
    });
  }

  onClickVideo(e) {
    let clickedId = e.target.getAttribute('id');
    let filteredVideo = this.state.collectionOfVideos.filter(video => video.id.videoId === clickedId)[0];
    this.setState({currentVideo: filteredVideo});
  }

  render () {

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
