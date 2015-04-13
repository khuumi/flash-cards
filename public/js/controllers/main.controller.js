app.controller('MainController', function ($scope,
  FlashCardFactory, ScoreFactory) {

  $scope.categories = [
      'MongoDB',
      'Express',
      'Angular',
      'Node'
  ];

  $scope.answerQuestion = function (answer, flashCard) {
    if (!flashCard.answered) {
      flashCard.answered = true;
      flashCard.answeredCorrectly = answer.correct;
      if (flashCard.answeredCorrectly === true){
        ScoreFactory.correct++;
      } else {
        ScoreFactory.incorrect++;
      }
    }
  };


  $scope.getAllCards = function() {
      FlashCardFactory.getFlashCards().then(function(data) {
        $scope.flashCards = data;
        $scope.selectedCategory = '_all';
      });

    };


  $scope.getCategoryCards = function(category) {
      FlashCardFactory.getFlashCards(category).then(function(data) {
        $scope.flashCards = data;
      });
      $scope.selectedCategory = category;
  };

  $scope.getAllCards();

});
