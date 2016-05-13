/**
 * Created by An on 5/10/2016.
 */

"use strict"

angular.module("eventsApp").controller("eventController", eventController);

function eventController($scope){
    $scope.event = {
        name : "Angular bootcamp",
        date: "5/5/2016",
        time: "10:30 am",
        location: {
            address: "BRA veien",
            city: "Halden"
        },
        imageUrl: "../app/img/angularjs-logo.png",
        sessions: [
            {
                name: "Session 1",
                creatorName: "An Tran",
                duration: "1 hour",
                level: "Intermediate",
                abstract: "The first session of the conference",
                upVoteCount: 2
            },
            {
                name: "Session 2",
                creatorName: "Duc Nguyen",
                duration: "2 hours",
                level: "Advanced",
                abstract: "The second session of the conference",
                upVoteCount: 3
            },
            {
                name: "Session 3",
                creatorName: "Bao Nguyen",
                duration: "1 hour",
                level: "Intermediate",
                abstract: "The third session of the conference",
                upVoteCount: 0
            }
        ]
    };
}