class Data {
  constructor(myApp) {
    this.myApp = myApp;
  }

  apps(controllerName){
    myApp.controller(controllerName, ['$scope', ($scope) => {

      $scope.text = "Hello world!";

    }]);
  }

}

class DataParse {
  constructormyApp(myApp) {
    this.myApp = myApp;
  }

  someData(){
    myApp.controller('someData', ['$scope','$http', ($scope, $http) => {
      $scope.some = "123";

      $http({
        method : 'GET',
        url : 'http://localhost'
      }).success((data, status, headers, config)=>{
        console.log(data);
        $scope.some = data;
      }).error((data, status, headers, config)=>{
        console.error(status);
      });

    }]);

  }
}
