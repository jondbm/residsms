module.exports = function () {

    return {
      processPacket: function (req, res) {
        var code = req.body.code
        var number = req.body.number
        //require the Twilio module and create a REST client
        var client = require('twilio')('ACc440bc692db5b670e8c9dc0240e0c31a', '7f87bd249d02ea6d23eecf097b492d4b');

        //Send an SMS text message
        client.sendMessage({

            to:number,
            from: '+441457597037',
            body: 'Please show identifier code '+ code

        }, function(err, responseData) { //this function is executed when a response is received from Twilio

            if (!err) { // "err" is an error received during the request, if any
                console.log(responseData.from); // outputs "+14506667788"
                console.log(responseData.body); // outputs "word to your mother."
                res.send({
                  success: true,
                });
            }
            else {
              console.log(err);
              res.send({
                success: false,
              });
            }
        });
      }
    }
};