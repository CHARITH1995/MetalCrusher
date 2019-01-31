const con = require('../models/connection');

module.exports.addexcavators=(req,res,next)=>{
    con.connect(function(err) {
        if (err) throw err;
        
        var ExcavatorId = req.body.excavatorid;
        var VehicaIId = req.body.vehicleid;

        var sql = "INSERT INTO Excavators VALUES (ExcavatorId, VehicaIId)";

        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
        con.end();
      });
}