/**
 * Created by An on 5/17/2016.
 */
angular.module("eventsApp").controller("editEventController", editEventController);

function editEventController($scope){
    $scope.saveEvent = function(event){
        alert(event.name)
    };

    $scope.cancelEdit = function(){
        window.location = "/app/eventDetails.html";
    };
}