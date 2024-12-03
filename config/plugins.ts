export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"), // Remplace par ton fournisseur SMTP, ici c'est un exemple avec Gmail
        port: env.int("SMTP_PORT", 465), // Port SMTP pour SSL
        secure: true, // Utiliser SSL
        auth: {
          user: env("SMTP_USERNAME"), // Adresse e-mail d'envoi (ton email Gmail par exemple)
          pass: env("SMTP_PASSWORD"), // Mot de passe d'application (pas ton mot de passe principal)
        },
      },
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM", "julien.medina16@gmail.com"),
        defaultReplyTo: env(
          "EMAIL_DEFAULT_REPLY_TO",
          "julien.medina16@gmail.com"
        ),
      },
    },
  },
});
