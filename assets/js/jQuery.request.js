// GET
$.getJSON('http://jsonmoon.jsapp.us/').done(function (data) {
  console.log(data.name.first);
});

// POST
$.ajax({
  url: 'http://frozen-woodland-5503.herokuapp.com/cors.json',
  data: 'this is data being posted to the server',
  contentType: 'text/plain',
  type: 'POST',
  dataType: 'json'
}).done(function (data) {
  console.log(data.name.last);
});