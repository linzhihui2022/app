module.exports = {
  apps: [
    {
      name: "NuxtAppName",
      exec_mode: "cluster",
      instances: "max",
      script: "server/output/server/index.mjs",
    },
  ],
};
