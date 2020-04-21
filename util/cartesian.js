var get_cartesian_dd = function (latitude, longitude) {
    ///radians = Angle in degrees x PI / 180.
    var lat = degreesToRadians(latitude);
    var long = degreesToRadians(longitude);
    var R = 6371; //Radius of the earth
    var x = R * Math.cos(lat) * Math.cos(long);
    var y = R * Math.cos(lat) * Math.sin(long);
    var z = R * Math.sin(lat);
    return { x: x, y: y, z: z };
};
var get_cartesian_dms = function (latitude, longitude) {
    return get_cartesian_dd(convertDMSToDD(latitude), convertDMSToDD(longitude));
};
var degreesToRadians = function (degrees) {
    return (degrees * Math.PI) / 180;
};
var radiansToDegrees = function (radians) {
    return (radians * 180) / Math.PI;
};
//36°57'9" N  = 36.9525000
//110°4'21" W = -110.0725000
//DMS = DegreesMinutesSeconds
//DD = DecimalDegrees
var convertDMSToDD = function (dms) {
    var parts = dms.split(/[^\d+(\,\d+)\d+(\.\d+)?\w]+/);
    var degrees = parseFloat(parts[0]);
    var minutes = parseFloat(parts[1]);
    var seconds = parseFloat(parts[2].replace(',', '.'));
    var direction = parts[3];
    var dd = degrees + minutes / 60 + seconds / (60 * 60);
    if (direction == 'S' || direction == 'W') {
        dd = dd * -1;
    }
    return dd;
};
