app.controller('InputFileController', function($scope) {

    $scope.addNewValues = function(new_value, value,item) {
        console.log(value);console.log(new_value);
        console.log(item);

        var val = angular.copy(new_value);
        console.log(val);

    $scope.currentModule.output.push(val);

    }

});