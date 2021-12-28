const path = require('path');

const createPath = (page)=> path.resolve(`../../Frontend/${page}.html`);

module.exports = createPath;
