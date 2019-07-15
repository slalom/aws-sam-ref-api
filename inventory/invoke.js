const aws = require('aws-sdk');

exports.invokeLamdba = async(region, creds, functionName) =>
  new Promise((resolve, reject) => {
    var lambda = new aws.Lambda({
      region: region,
      accessKeyId: creds.accessKeyId,
      secretAccessKey: creds.secretAccessKey});
    var params = {
      FunctionName: functionName,
    };

    lambda.invoke(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        var response = JSON.parse(data.Payload);
        resolve(JSON.parse(response.body));
      }
    });
  });

