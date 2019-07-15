const invoke = require('./invoke.js');

test('CON_addInventory_productUUID_locationURI', async() => {
  var event = {
    resource: 'Resource path',
    path: 'Path parameter',
    httpMethod: 'POST',
    headers: {Host: 'lambda.us-west-2.amazonaws.com'},
    queryStringParameters: {},
    pathParameters: {},
    stageVariables: {},
    requestContext: {path: '/new'},
    body: '{\"id\": \"5cf536f7-ff74-4eb7-b7a9-3b7d2fa75987\"}',
    isBase64Encoded: 'true'};

  var response = await invoke.invokeLamdba(
    'us-west-2', {
      accessKeyId: '',
      secretAccessKey: ''},
    'tpci-aws-sam-ref-api-addInventory-dev',
    JSON.stringify(event));

  expect(response.statusCode).toBe(201);
  expect(response.headers.Location).toBe('https://' +
    'lambda.us-west-2.amazonaws.com/new/5cf536f7-ff74-4eb7-b7a9-3b7d2fa75987');
});
