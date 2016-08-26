myApp.controller('profileController', ['$scope','$http', ($scope, $http) => {
  $scope.datas = {};

  $http({
    method : 'GET',
    url : 'profile/profile.json'
  }).success((data, status, headers, config)=>{
    console.log(data);
    $scope.datas = data;
  }).error((data, status, headers, config)=>{
    console.error(status);
  });

}]);
