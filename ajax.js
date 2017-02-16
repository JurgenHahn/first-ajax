$(function() {
  $('#button-12').on('click', function(){
    $.ajax({
      url: 'http:first-ajax-api.herokuapp.com/',
      method: 'GET',
    // data: {},
      dataType: 'text'
    }).done(function(data){
      console.log(data);
    });
  });

  $('#button-3456').on('click', function(){
    $.ajax({
      url: 'http:first-ajax-api.herokuapp.com/ping',
      method: 'GET',
    // data: {},
      dataType: 'text'
    }).done(function(data){
      console.log(data);
      $("#step3456").append(data);
    }).fail(function(){
      $("#step3456").append("Sorry Brotendo, We dun f'ed up");
      console.log('We have encountered an error regarding your request. Sorry!');
    }).always(function(){
      $("#step3456").append("Everything is tip top mate!");
      console.log('The request have been fulfilled. Thanks for being great!');
    });
  });


  $('#button-7').on('click', function(){
    $.ajax({
      url: 'http:first-ajax-api.herokuapp.com/count',
      method: 'GET',
    // data: {},
      dataType: 'text'
    }).done(function(data){
      console.log(data);
    }).done(function(data){
      $('#step7').append(data);
    });
  });

  $('#button-8').on('click', function(){
    $.ajax({
      url: 'http:first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'America/New_York'},
      dataType: 'text'
    }).done(function(data){
      $('#step8').append(data);
    });
  });

  $('#button-9').on('click', function(){
    $.ajax({
      url: 'http:first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    }).done(function(data){
      $('#list').append(data);

    });
  });
});
