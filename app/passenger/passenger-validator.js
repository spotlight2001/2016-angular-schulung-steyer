app.directive('passengerName', function () {

    var REGEX = /^[a-zA-Z0-9-]+$/;

    return {

        require: 'ngModel',

        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.passengerName = function(modelValue, viewValue) {

                console.log("validate sync value: " + viewValue);

                var valid = REGEX.test(viewValue);
                return valid;


            };

        }

    };
});


app.directive('passengerNameAsync', function($q) {

    return {
        require: 'ngModel',
        link: function(scope, element, attributes, ngModel) {

            ngModel.$asyncValidators.passengerNameAsync = function(value) {

                console.log("async validate: " + value);

                return $q(function(resolve, reject) {
                    setTimeout(function() {
                        //reject();
                        resolve();
                    }, 3000);
                })

            }

        }
    }

})