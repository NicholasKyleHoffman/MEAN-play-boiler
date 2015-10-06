var app = angular.module('flapperNews', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {


  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })        //   removed ';'

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

    $urlRouterProvider.otherwise('home');     // default is home state

}]);

app.factory('posts', [function(){
//  $scope.posts = posts.posts;             // not sure if this is right search $scope.posts = posts.posts;
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
//  $scope.test = 'Hello world!';
  $scope.posts = posts.posts;
/*
  $scope.posts = [                          // added this
     {title: 'post 1', upvotes: 5},
     {title: 'post 2', upvotes: 2},
     {title: 'post 3', upvotes: 15},
     {title: 'post 4', upvotes: 9},
     {title: 'post 5', upvotes: 4}
   ];
*/
$scope.addPost = function(){
  if(!$scope.title || $scope.title === ''){ return; }

  $scope.posts.push({
    title: 'Post ' + $scope.title,
    link: 'URL: ' + $scope.link,
    upvotes: 0,
    comments: [
      {author: 'Joe', body:'Good one', upvotes: 0},         // faking comment data needs comment control
      {author: 'Bridgette', body:'Boring', upvotes: 5}
    ]
  });
  $scope.title = '';
  $scope.link = '';
};

$scope.incrementUpvotes = function(post){
  post.upvotes += 1;
}

}]);

app.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){
    $scope.post = posts.posts[$stateParams.id];

  $scope.addComment = function(){
    if($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
    });
  $scope.body = '';
  };

  $scope.incrementUpvotes = function(comment){
    comment.upvotes += 1;
  }

}]);

/*
*/


/*
$scope.posts.push({
  title: $scope.title,
  link: $scope.link,
  upvotes: 0,
  comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]
});
                                                                                      moved to mainCtrl
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }  // title validation
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0});
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  };
*/
