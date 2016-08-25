class Data {
  constructormyApp(myApp) {
    this.myApp = myApp;
  }

  getProfile(controllerName){
    myApp.controller(controllerName, ['$scope','$http', ($scope, $http) => {
      $scope.datas = {};

      $http({
        method : 'GET',
        url : './profile.json'
      }).success((data, status, headers, config)=>{
        console.log(data);
        $scope.datas = data;
      }).error((data, status, headers, config)=>{
        console.error(status);
      });

    }]);

  }
}
