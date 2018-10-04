var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: {
      type: 'video',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'id,snippet',
      videoEmbeddable: 'true'
    },
    success: (data) => {
      if (data) {
        console.log('Success: ', data.items);
        callback(data.items);
      }
    },
    error: (data) => {
      console.log('error', data);
    }

  });
};

window.searchYouTube = searchYouTube;
