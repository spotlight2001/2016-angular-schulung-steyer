app.controller("flight-search", function ($scope) {

    $scope.vm = {
        info: 'Hallo Welt!'
    };

});

app.controller("PassengerCtrl", function($http, passengerService) {
    var that = this;

    that.selection;

    that.search = function() {
        var name = that.filterName;
        passengerService.search(name).then(function(passengers) {
            that.passengers = passengers;
        })
    }

    that.select = function(passenger) {
        that.selection = passenger;
        console.log("passenger selected with id: " + passenger.id);
    }

    that.passengers = that.search("");

} );