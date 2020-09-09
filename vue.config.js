module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ["github"],
        linux: {
          target: {
            target: "appimage",
            arch: ["x64", "armv7l"]
          }
        }
      }
    }
  }
};
