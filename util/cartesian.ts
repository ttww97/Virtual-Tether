export interface Vector3 {
    x: number;
    y: number;
    z: number;
}

interface DecimalDegrees {
    value: number
}

interface DegreesMinutesSeconds {
    value: string
}

export const get_cartesian_dd = (latitude, longitude) : Vector3 =>{
    ///radians = Angle in degrees x PI / 180.
    let lat : number = degreesToRadians(latitude);
    let long : number = degreesToRadians(longitude);
    const R = 6371; //Radius of the earth
    let x = R * Math.cos(lat) * Math.cos(long)
    let y = R * Math.cos(lat) * Math.sin(long)
    let z = R * Math.sin(lat)
    return {x,y,z}
}

const get_cartesian_dms = (latitude, longitude) => {
    return get_cartesian_dd(convertDMSToDD(latitude), convertDMSToDD(longitude));
}

const degreesToRadians = degrees => {
    return (degrees*Math.PI)/180;
}

const radiansToDegrees = radians => {
    return (radians*180)/Math.PI;
}


//36°57'9" N  = 36.9525000
//110°4'21" W = -110.0725000

//DMS = DegreesMinutesSeconds
//DD = DecimalDegrees
const convertDMSToDD =  (dms) => {
    let parts = dms.split(/[^\d+(\,\d+)\d+(\.\d+)?\w]+/);
    let degrees = parseFloat(parts[0]);
    let minutes = parseFloat(parts[1]);
    let seconds = parseFloat(parts[2].replace(',','.'));
    let direction = parts[3];

    let dd = degrees + minutes / 60 + seconds / (60 * 60);

    if (direction == 'S' || direction == 'W') {
      dd = dd * -1;
    }
    return dd;
}