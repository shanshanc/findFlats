const { myFunc , getData } = require('./getListings');

let output = ''
async function main () {
  try {
    let res = await getData();
    output = JSON.stringify(res);

    // The output should be written to database or response body
    // but for simplicity, it's shown in the console for now.
    console.log(output);
  } catch (e) {
    console.error(e);
  }
}

main();
