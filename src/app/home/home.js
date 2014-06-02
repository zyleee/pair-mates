angular.module( 'PairMates.home', [
  'ui.router',
  'mates'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope, $mates ) {
    $scope.mates = $mates;
    $scope.pairs = [];
    $scope.getPairs = function() {
        $scope.pairs = $mates.getPairs();
    };
})

;

