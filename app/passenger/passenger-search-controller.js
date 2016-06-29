app.controller("PassengerSearchController", function($http, PassengerService, $stateParams) {
    var that = this;

    that.selection;

    that.filterName = $stateParams.name

    that.search = function(valid) {
        /*
        if (! valid) {
            return;
        }
        */
        var name = that.filterName;
        PassengerService.search(name).then(function(passengers) {
            that.passengers = passengers;
        })
    }

    that.select = function(passenger) {
        that.selection = passenger;
        console.log("passenger selected with id: " + passenger.id);
    }

    that.passengers = that.search("");

} );