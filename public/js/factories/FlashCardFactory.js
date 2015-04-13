app.factory('FlashCardFactory', function($http) {
  var URL = 'http://localhost:1337/cards';

  return  {
    getFlashCards: getFlashCards
  };


  function getFlashCards(category){
    return $http.get(URL,
      {params: {category: category}})
    .then(function(response){
      return response.data;
    });
  }

});