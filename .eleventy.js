module.exports = function(config) {

  // config.setBrowserSyncConfig({
  //   https: {
  //     key: '/etc/localhost.key',
  //     cert: '/ect/localhost.crt'
  //   }
  // });

  config.addPassthroughCopy('src/js');

  return {
    dir: {
      input: "src",
      "output":  "dist",
      "data": "_data"
    }
  };

}