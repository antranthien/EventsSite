/**
 * Created by An on 5/16/2016.
 */
'use strict';

angular.module("eventsApp").filter('durations', function(){
    return function (duration) {
        switch(duration){
            case 1:
                return 'Half hour';
            case 2:
                return 'One hour';
            case 4:
                return 'Four hours';
        }
    }
});