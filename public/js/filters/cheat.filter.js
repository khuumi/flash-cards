app.filter('cheat', function() {
  return function(answers) {

    return answers.filter(function(elem) {
      return elem.correct;
    });

  };
});