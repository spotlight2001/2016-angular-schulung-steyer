app.service("PassengerService", function($http, baseUrl) {

    var that = this;

    that.search = function(name) {
        console.log("search with name: " + name);
        var url = baseUrl + "/passenger";
        console.log("url: " + url);
        var params = {
            name: name
        };

        return $http.get(url, {params: params}).then(function(response) { return response.data; });
    }

});