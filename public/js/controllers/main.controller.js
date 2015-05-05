app.controller('MainController', function ($scope,
  FlashCardFactory, ScoreFactory) {

  $scope.categories = [
      'MongoDB',
      'Express',
      'Angular',
      'Node'
  ];


  $scope.getAllCards = function() {
    $scope.showLoader = true;
      FlashCardFactory.getFlashCards().then(function(data) {
        $scope.flashCards = data;
        $scope.selectedCategory = '_all';
        $scope.showLoader = false;
      });

    };


  $scope.getCategoryCards = function(category) {
      $scope.showLoader = true;
      FlashCardFactory.getFlashCards(category).then(function(data) {
        $scope.flashCards = data;
        $scope.showLoader = false;
      });
      $scope.selectedCategory = category;
  };

  $scope.getAllCards();

});
