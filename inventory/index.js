const search = require('./search.js');
const add = require('./add.js');

exports.searchInventory = async(event) => {
  const inventory = await search.search();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inventory, null, 2),
  };
};

exports.addInventory = async(event) => {
  const hostname = event.headers.Host;
  const path = event.requestContext.path;

  let inventory = JSON.parse(event.body);

  await add.add(inventory);
  return {
    statusCode: 201,
    headers: {
      Location: `https://${hostname}${path}/${inventory.id}`,
    },
  };
};
