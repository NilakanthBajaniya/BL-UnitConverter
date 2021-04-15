var _=require('lodash');

const convert = (req, res) => {

    const convType = req.body.convType;
    const unit =req.body.unit;

    console.log(convType)

    if((convType == undefined || convType == "" || convType == " "))
    {
        err = {
            "error": "Conversion type can not be empty"
        }
        res.status(422).send(err)
        return;
    }

    if((unit == undefined || unit == "" || unit == " "))
    {
        err = {
            "error": "Unit can not be empty"
        }
        res.status(422).send(err)
        return;
    }

    if(isNaN(unit))
    {
        err = {
            "error": "Unit must be a Number."
        }
        res.status(422).send(err) 
        return;
    }

    if(convType == 1) // convert to meter
    {
        const feets = parseFloat(unit);
        const feetsInMeters = (feets * 0.3048).toFixed(2);

        res.status(200).json({feetsInMeters});
        return;
    }
    else if(convType == 2) // convert to feet
    {
        let meters = parseFloat(unit)
        const metersInFeets = (meters * 3.28084).toFixed(2);
     
        res.status(200).json({metersInFeets});
        return;
    }
    else{

        err = {
            "error": "Please select valid conversion type"
        }
        res.status(400).send(err)
        return;
    }
};

module.exports = {convert};