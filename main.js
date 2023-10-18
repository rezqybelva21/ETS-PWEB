const settings = {
    async: true,
    crossDomain: true,
    url: 'https://it-its.id/api/movies',
    method: 'GET',
    dataType: 'json'
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  