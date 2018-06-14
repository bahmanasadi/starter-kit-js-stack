// @flow

var server = null;

function init(s: any) {
  server = s;
}

function log(tags: Array<string>, data: any) {
  if (server != null) server.log(tags, data);
}

module.exports = {
  init,
  log,
};
