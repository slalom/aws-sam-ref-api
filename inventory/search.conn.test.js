const invoke = require('./invoke.js');

test('CON_searchInventory_emptyPayload_prouctUUID', async() => {
  var response = await invoke.invokeLamdba(
    'us-west-2', {
      accessKeyId: '',
      secretAccessKey: ''},
    'tpci-aws-sam-ref-api-searchInventory-dev');

  expect(JSON.parse(response.body).id).toMatch(
    new RegExp(['[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}',
      '\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}'].join('')));
});
