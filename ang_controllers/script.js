var app = angular.module("myApp", []);
app.controller('formController', function($scope){
    var self = this;
    this.formObj = {};
    $scope.formArray = [];

    this.maxLength = 25;
    this.charactersLeft = function() {
        if(self.formObj.comments){
            var commentsSoFar = self.formObj.comments.length;
            var leftOver = self.maxLength - commentsSoFar;
        } else {
            leftOver = self.maxLength;
        }
        return leftOver;
    };

    this.addValues = function() {
        $scope.formArray.push(self.formObj);
        self.formObj = {};
    };
    //$scope.formArray = [];
});
app.controller('tableController', function($scope){
    this.removeObjFromFormArray = function($index) {
        $scope.formArray.splice($index, 1);
    };
    this.numberOfTableEntries = function(){
        var totalEntries = this.tableEntries = $scope.formArray.length;
        return totalEntries;
    };
});