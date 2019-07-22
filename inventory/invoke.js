const aws = require('aws-sdk');

exports.invokeLamdba = async(region, functionName, payload) =>
  new Promise((resolve, reject) => {
    var lambda = new aws.Lambda({
      region: region});
    var params = {FunctionName: functionName};
    if (payload) {
      params.Payload = payload;
    }

    lambda.invoke(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        var response = JSON.parse(data.Payload);
        resolve(response);
      }
    });
  });
