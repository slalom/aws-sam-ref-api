const aws = require('aws-sdk');

exports.invokeLamdba = async(region, creds, functionName, payload) =>
  new Promise((resolve, reject) => {
    var lambda = new aws.Lambda({
      region: region,
      accessKeyId: creds.accessKeyId,
      secretAccessKey: creds.secretAccessKey});
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

