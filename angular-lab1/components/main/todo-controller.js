"use strict";
{
    angular.module('todoapp')
    .controller('ToDoController', function(){
        const $ctrl = this;

        $ctrl.lists=[];
        $ctrl.add=function(){
            $ctrl.tasks.push($ctrl.list);
        };

        $ctrl.tasks = [
                {todo: 'Walk the dog', complete: true},
                {todo: 'Go to the store', complete: true},
                {todo: 'Get Gas', complete: false},
                {todo: 'Wash the car', complete: true }
            ];


        $ctrl.delete=function(index){
            $ctrl.tasks.splice(index, 1);

        };

            
        
    });
}