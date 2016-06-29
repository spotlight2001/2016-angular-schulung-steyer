app.component('passengerCard', {
    templateUrl: 'app/components/passenger-card-template.html',
    transclude: true,
    bindings: {
        item: '<',
        selection: '<',
        selectionChange: '&'
    },
    controller: function () {
        var that = this;
        that.select = function () {
            that.selection = that.item;
            that.selectionChange({ $event: this.item });
        }
    }
})