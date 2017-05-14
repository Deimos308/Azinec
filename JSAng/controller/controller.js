/**
 * Created by Deimos on 12.05.2017.
 */
var mainApp = angular.module('mainApp', []);
    mainApp.controller('mainController', function ($scope) {
        $scope.spoiler = false;
            $scope.processors = [
                { "name": "Intel Core i7 4770",
                    "frequency":"3,4 ГГц (до 3,9 ГГц)",
                    "cores":"4 ядра",
                    "threads":"8 потоков",
                    "cache":"кэш L3=8 МБ",
                    "TDP":"TDP 84 Вт",
                    "graphic":" Intel HD Graphics 4600",
                    "editing": false},
                { "name": "Intel Core i7 4770K",
                    "frequency":"3,5 ГГц (до 3,9 ГГц)",
                    "cores":"4 ядра",
                    "threads":"8 потоков",
                    "cache":"кэш L3=8 МБ",
                    "TDP":"TDP 84 Вт",
                    "graphic":"Intel HD Graphics 4600",
                    "editing": false},
                { "name": "Intel Core i7 4790",
                    "frequency":"3,5 ГГц (до 4,0 ГГц)",
                    "cores":"4 ядра",
                    "threads":"8 потоков",
                    "cache":"кэш L3=8 МБ",
                    "TDP":"TDP 84 Вт",
                    "graphic":"Intel HD Graphics 4600",
                    "editing": false},
                { "name": "Intel Core i7 4790K",
                    "frequency":"4,0 ГГц (до 4,4 ГГц)",
                    "cores":"4 ядра",
                    "threads":"8 потоков",
                    "cache":"кэш L3=8 МБ",
                    "TDP":"TDP 88 Вт",
                    "graphic":"Intel HD Graphics 4600",
                    "editing": false}
            ];
  /*    var procData = localStorage['processors'];
        if(procData !== undefined){
            $scope.processors = JSON.parse(procData);
        }*/

            $scope.sortField = undefined;
            $scope.reverse = false;

            $scope.orderByParam = function ( fieldName) {
                if ($scope.sortField == fieldName){
                    $scope.reverse = !$scope.reverse;
                } else  {
                    $scope.sortField = fieldName;
                    $scope.reverse = false;
                }

            }
            $scope.addNewProcessor = function () {
                var voidField = false;
               var name = $scope.name; $scope.name = "";
                    if(name == undefined || !name.trim()){voidField = true};
               var frequency = $scope.frequency; $scope.frequency ="";
                    if(frequency == undefined || !frequency.trim()){voidField = true};
               var cores = $scope.cores;  $scope.cores = "";
                    if(cores == undefined || !cores.trim()){voidField = true};
               var threads = $scope.threads; $scope.threads = "";
                    if(threads == undefined || !threads.trim()){voidField = true};
               var cache = $scope.cache; $scope.cache = "";
                    if(cache == undefined || !cache.trim()){voidField = true}
               var TDP = $scope.TDP; $scope.TDP ="";
                    if(TDP == undefined || !TDP.trim()){voidField = true}
               var graphic = $scope.graphic; $scope.graphic ="";
                    if(graphic == undefined || !graphic.trim()){voidField = true}
               if(voidField == false){
                   $scope.processors.push({
                       name: name,
                       frequency:frequency,
                       cores:cores,
                       threads:threads,
                       cache:cache,
                       TDP:TDP,
                       graphic:graphic})
               } else {
                   alert('Not all required fields are filled!');
               }
            }

            $scope.removeMe = function(name){
                console.log(name);
                for(var i = 0; i < $scope.processors.length; i++) {
                    var obj = $scope.processors[i];

                    if(obj.name === name) {
                        $scope.processors.splice(i, 1);
                    }
                }
            }
        $scope.editItem = function (processor) {
            processor.editing = true;
        }

        $scope.doneEditing = function (processor) {
            processor.editing = false;
            //dong some background ajax calling for persistence...
        };
        $scope.spoilerStatementChange= function () {
            $scope.spoiler = !$scope.spoiler;
        }
    });