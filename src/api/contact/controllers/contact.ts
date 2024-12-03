import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::contact.contact",
  ({ strapi }) => ({
    async sendEmail(ctx) {
      try {
        const { name, email, sujet, message } = ctx.request.body;

        // Vérifie si tous les champs requis sont remplis
        if (!name || !email || !sujet || !message) {
          return ctx.badRequest("Tous les champs sont requis.");
        }

        // Utiliser le service email de Strapi pour envoyer l'email
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: process.env.EMAIL_DEFAULT_REPLY_TO,
            from: process.env.EMAIL_DEFAULT_FROM,
            replyTo: email,
            subject: `Nouveau message de ${name} - ${sujet}`,
            text: message,
            html: `<p>${message}</p><br/><strong>Nom : </strong> ${name} <br/><strong>Email : </strong> ${email}`,
          });

        // Retourner une réponse de succès
        return ctx.send({ message: "Email envoyé avec succès !" });
      } catch (error) {
        strapi.log.error("Erreur lors de l'envoi de l'email :", error);
        return ctx.internalServerError("Erreur lors de l'envoi de l'email.");
      }
    },
  })
);
