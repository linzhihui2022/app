module.exports = {
  apps: [
    {
      name: "app",
      exec_mode: "cluster",
      instances: "max",
      script: "server/output/server/index.mjs",
    },
  ],
};
