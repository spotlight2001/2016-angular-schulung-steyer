/*
A SEN Senator
B FTL Frequent Travellor
C M Meilenprogramm
 */
app.filter('passengerStatus', function() {
    return function(value, format) {
        var short;
        var long;

        switch(value) {
            case "A":
                short = "SEN";
                long = "Senator";
                break;
            case "B":
                short = "FTL";
                long = "Frequent Travellor";
                break;
            case "C":
                short = "M";
                long = "Meilenprogramm";
                break;
            default:
                short = long = value;
        }

        if (format == 'short') return short;
        return long;
    }
});