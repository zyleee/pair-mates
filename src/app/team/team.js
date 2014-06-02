angular.module( 'PairMates.team', [
  'ui.router',
  'ui.bootstrap',
  'mates'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'team', {
    url: '/team',
    views: {
      "main": {
        controller: 'TeamCtrl',
        templateUrl: 'team/team.tpl.html'
      }
    },
    data:{ pageTitle: 'Team' }
  });
})

.directive('ensureUnique', ['$mates', function($mates) {
    return {
        require: 'ngModel',
        link: function(scope, ele, attrs, c) {
            scope.$watch(attrs.ngModel, function() {
                var success = $mates.isUnique(ele.val());
                if(success) {
                    c.$setValidity('unique', true);
                }else {
                    c.$setValidity('unique', false);
                }
            });

        }
    };
}])

.controller( 'TeamCtrl', function TeamCtrl( $scope, $mates ) {
  $scope.mate = { name: '' };
  $scope.mates = $mates;
})

;
