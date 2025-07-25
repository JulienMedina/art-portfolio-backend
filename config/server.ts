export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },

  transfer: {
    remote: {
      enabled: true, // Assurez-vous que cette valeur est à true
    },
  }, // Désactive les WebSockets
});
