app.controller("PassengerEditController", function ($stateParams, PassengerService) {
    var that = this;

    that.passenger = {};
    that.id = $stateParams.id;

    PassengerService.search().then(function (passengers) {
        console.dir(passengers);
        passengers.forEach(function(curr) {
            console.log("param-id: " + that.id + ", current iteration passenger id: " + curr.id)
            if (curr.id == that.id) {
                that.passenger = curr;
            }
        });
    });
})