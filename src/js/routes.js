'use strict';

angular.module('starter').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'views/search.html'
      }
    }
  })

  .state('browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'views/browse.html'
      }
    }
  })

  .state('playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'views/playlists.html',
      }
    }
  })

  .state('single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'views/playlist.html',
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/playlists');
});
