var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=',
    type: 'GET',
    dataType: 'json',
    key: window.YOUTUBE_API_KEY,
    query: 'string',
    part: 'snippet',
    videoEmbeddable: true,
    max: 5,
    success: () => {
      console.log("Successfully received data!");
    },
    fail: () => {
      console.log('Error:', data);
    }




  }).done((data) => {
    callback(data.items);
  });
};

window.searchYouTube = searchYouTube;
