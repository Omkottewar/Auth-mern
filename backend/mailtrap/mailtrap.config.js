import { MailtrapClient } from "mailtrap";

const TOKEN = "a9316b12320c73244c7473ecb46738f9";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};

