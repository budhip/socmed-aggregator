$(document).ready(function() {
  $('#ngetweet').click(function(event) {
    let query = $('#status').val()
    axios.post('http://localhost:3000/post', {
      status: query
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  })

  $('#tweet-output').hide()
  $.ajax({
    url: 'http://localhost:3000',
    type: 'GET',
    success: function(data) {
      var content = JSON.parse(data);

      for(let i = 0; i < content.length; i++) {
        var template = $($('#tweet').prop('content')).children().clone()
        console.log(content[i].user);
        template.find('.body').text(content[i].text);
        template.find('.name').text(content[i].user.name);
        template.find('img').attr('src',content[i].user.profile_image_url);
        template.find('.user').text('@' + content[i].user.screen_name);
        template.find('.favorite').text('RT ' + content[i].favorite_count);
        template.find('.retweet').text('Fav ' + content[i].retweet_count);

        $('#timeline').append(template)
      }
    },
    fail: function() {
      console.log('Error')
    }
  })

  $('#cari-tweet').click(function(event) {
    $('#hasil-pencarian').empty()
    let query = $('#search').val()
    console.log(query)
    axios.post('http://localhost:3000/search', {
      search: query
    })
    .then(function (response) {
      var content = response.data.statuses;

      for(let i = 0; i < content.length; i++) {
        var template = $($('#tweet').prop('content')).children().clone()
        template.find('.body').text(content[i].text);
        template.find('.name').text(content[i].user.name);
        template.find('img').attr('src',content[i].user.profile_image_url)
        template.find('.user').text('@' + content[i].user.screen_name);
        template.find('.favorite').text('RT ' + content[i].favorite_count);
        template.find('.retweet').text('Fav ' + content[i].retweet_count);

        $('#hasil-pencarian').append(template)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  })
})
