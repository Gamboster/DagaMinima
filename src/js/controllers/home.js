'use strict';

<<<<<<< HEAD
angular.module('starter.controllers').controller('homeController', function($scope, $timeout, sectionsService, wishlistService, $cordovaSocialSharing) {
=======
angular.module('starter.controllers').controller('homeController', function($scope, $timeout, sectionsService, wishlistService) {
>>>>>>> gdeamicis-fix/favoriteButton
  $scope.options = {
    loop: false,
    effect: 'flip',
    speed: 500,
    spaceBetween: 100
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
    // data.slider is the instance of Swiper
    $scope.description = "This is a basic Card which contains an item that has wrapping text. Este es mi perro es el mejor perro del mundo por favor adoptalo se llama Jesú."

    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data) {
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {

    $timeout(function() {
      $scope.$apply();
    }, 1);

    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });

  //DEFAULT -- This should change depending on how someone gets to the section view
  $scope.section = 'Adopt';
  $scope.publications = sectionsService.getSectionPubs('Adopt');

  $scope.changeSection = function(section) {
    switch (section) {
      case 'Adopt':
        $scope.publications = sectionsService.getSectionPubs('Adopt');
        $scope.section = 'Adopt';
        break;
      case 'Wanted':
        $scope.publications = sectionsService.getSectionPubs('Wanted');
        $scope.section = 'Wanted';
        break;
      case 'Lost':
        $scope.publications = sectionsService.getSectionPubs('Lost');
        $scope.section = 'Lost';
        break;
    }
  }

  $scope.setFavorite = function(publication) {
    publication.favorite = !publication.favorite;
    if(publication.favorite){
      wishlistService.addFavoritePub(publication);
    } else {
      wishlistService.deleteFavoritePub(publication);
    }
  }

  $scope.share = function(description,image) {
    $cordovaSocialSharing.share(description, $scope.section, null, "Compartido desde Aninder");
  }
});
