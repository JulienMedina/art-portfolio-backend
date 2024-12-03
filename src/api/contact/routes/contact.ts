export default {
  routes: [
    {
      method: "POST",
      path: "/contact",
      handler: "contact.sendEmail",
    },
  ],
};
