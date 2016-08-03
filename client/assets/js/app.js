(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .controller('galleryCtrl', function($scope) {
      $scope.galleryItems = [
        {
          image: 'http://placehold.it/1200x600',
          date: '15 December 2015',
          comments: 6,
          tags:['design', 'ux', 'development'],
          text: 'The supreme art of war is to subdue the enemy without fighting.' 
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '1 January 2015',
          comments: 0,
          tags:['something', 'development'],
          text: 'However beautiful the strategy, you should occasionally look at the results.' 
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '4 July 2015',
          comments: 9001,
          tags:['guitar', 'metal', 'development'],
          text: 'The supreme art of war is to subdue the enemy without fighting.' 
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '13 February 2015',
          comments: 3,
          tags:['something', 'design'],
          text: 'Objects and their manufacture are inseparable, you understand a product if you understand how it’s made.' 
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '11 August 2015',
          comments: 14,
          tags:['hire', 'me', 'pls'],
          text: 'The supreme art of war is to subdue the enemy without fighting.'  
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '11 August 2015',
          comments: 14,
          tags:['gaming', 'design', 'development'],
          text: 'The supreme art of war is to subdue the enemy without fighting.'   
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '11 August 2015',
          comments: 14,
          tags:['js', 'design', 'development'],
          text: 'The supreme art of war is to subdue the enemy without fighting.'  
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '11 August 2015',
          comments: 14,
          tags:['angular', 'design', 'development'],
          text: 'The supreme art of war is to subdue the enemy without fighting.'  
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '11 August 2015',
          comments: 14,
          tags:['nothing'],
          text: 'The supreme art of war is to subdue the enemy without fighting.' 
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '11 August 2015',
          comments: 14,
          tags:['killme', 'design', 'development'],
          text: 'The supreme art of war is to subdue the enemy without fighting.' 
        },
        {
          image: 'http://placehold.it/1200x600',
          date: '11 August 2015',
          comments: 14,
          tags:['drums', 'design', 'development'],
          text: 'The supreme art of war is to subdue the enemy without fighting.' 
        }
      ];

      $scope.tag = function(message) {
        if ($scope.tags) {
          return $scope.tags.replace(/\s*,\s* | \s*/g, ',').split(',').every(function(tag) {
            return message.tags.some(function(objTag){
              return objTag.indexOf(tag) !== -1;
            });
          });
        }
        else {
          return true;
        }
      };

      $scope.limited = 4;
      $scope.moreLess = 'LOAD MORE';
      $scope.loadMore = function() {
        $scope.limited == 4 ? ($scope.limited = 11, $scope.moreLess = 'SHOW LESS') : ($scope.limited = 4, $scope.moreLess = 'LOAD MORE');
      };
    })
    .filter('divideTags', function(){
      return function(item) {
        return '#' +item.join(' #');
      }
    })
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
