app.component('passengerCard', {
    templateUrl: 'app/components/passenger-card.html',
    transclude: true,
    bindings: {
        item: '<',
        selection: '<',
        selectionChange: '&',
        param1: '@'
    },
    controller: function () {
        var that = this;
        that.select = function () {
            that.selection = that.item;
            that.selectionChange({ $event: this.item });
        }
    }
})