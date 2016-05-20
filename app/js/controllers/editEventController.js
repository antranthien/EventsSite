/**
 * Created by An on 5/17/2016.
 */
angular.module("eventsApp").controller("editEventController", editEventController);

function editEventController($scope){
    $scope.saveEvent = function(event, newEventForm){
        //console.log(newEventForm);
        if(newEventForm.$valid){
            alert(event.name)
        }

    };

    $scope.cancelEdit = function(){
        window.location = "/app/eventDetails.html";
    };
}