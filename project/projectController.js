myApp.controller('projectController', ['$scope','$http', ($scope, $http) => {
  $scope.datas = {};

  $http({
    method : 'GET',
    url : 'project/projectData.json'
  }).success((data, status, headers, config)=>{
    $scope.datas = data.project;
    console.log("project data list : ")
    console.log($scope.datas);
  }).error((data, status, headers, config)=>{
    console.error(status);
  });

}]);
