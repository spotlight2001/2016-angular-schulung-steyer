app.directive('passengerNameConverter', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attributes, ngModel) {

            ngModel.$parsers.unshift(function(viewValue) {

                console.log("try to convert: " + viewValue);

                if (viewValue.toLowerCase().indexOf("mu")) {
                    return "Muster";
                }
                return viewValue;
            })
        }
    }
})