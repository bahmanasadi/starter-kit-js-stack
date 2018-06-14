// @flow
/* global process */

const Hapi = require("hapi");
const logger = require("./utils/logger.js");

const server = new Hapi.Server({
  port: 3000,
  host: "localhost",
});

server.route({
  method: "GET",
  path: "/",
  options: {
    log: {
      collect: true,
    },
  },
  handler: function() {
    return "hello world";
  },
});

const options = {
  ops: {
    interval: 15000,
  },
  reporters: {
    consoleReporter: [
      {
        module: "good-squeeze",
        name: "Squeeze",
        args: [{ log: "*", response: "*" }],
      },
      {
        module: "good-console",
      },
      "stdout",
    ],
    fileReporter: [
      {
        module: "good-squeeze",
        name: "SafeJson",
      },
      {
        module: "good-file",
        args: ["./logs/geneal.log"],
      },
    ],
  },
};

const start = async () => {
  await server.register({
    plugin: require("good"),
    options,
  });
  await server.start();
  logger.init(server);
  logger.log(["info"], `Server started at ${server.info.uri}`);
};

start();

process.on("unhandledRejection", (err) => {
  logger.log(["error"], err);
  process.exit(1);
});
