'use strict';

// Declare app level module which depends on views, and components
angular.module('socialNetwork', [
          'ngResource',
          'ngCookies',
           'ngRoute',
          'socialNetwork.users', 
          'socialNetwork.home',
          'socialNetwork.newsFeed',
          'socialNetwork.common',
         'socialNetwork.users.identity',
          'socialNetwork.version',
          'socialNetwork.common.footer',
          'socialNetwork.common.validate',
          'socialNetwork.common.datepicker'
        ])
     .config(['$routeProvider','$locationProvider',function( $routeProvider, $locationProvider ) {
            $locationProvider.html5Mode(true);
          //$locationProvider.hashPrefix('!');
            $routeProvider.otherwise({redirectTo: '/home'})
      }])
      .run(['$rootScope', '$location', 'authentication', function($rootScope, $location, authentication) {
        $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
          debugger; // nikoga ne vleze, trjbva pri refresh
            if (rejection == 'Unauthorized Access') {
                $location.path('/');
            }
        });
        
        authentication.refreshCookie();
}])
    .constant("BASE_URL",'https://softuni-social-network.azurewebsites.net/api/')
    .constant("jQuery",'$')
      

