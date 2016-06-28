app.service("passengerService", function($http) {

    var that = this;

    that.search = function(name) {
        console.log("search with name: " + name);
        var url = "http://www.angular.at/api/passenger";
        var params = {
            name: name
        };

        return $http.get(url, {params: params}).then(function(response) { return response.data; });
    }

});