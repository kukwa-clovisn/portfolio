export default defineEventHandler(async (event) => {
  const { sendMail } = useNodeMailer();
  const user = await readBody(event);
  console.log(user);

  const email = await sendMail({
    subject: "testing nodemailer",
    text: "Hello from codingherald!",
    to: "kcn.123.com@gmail.com",
  });

  return email;
});
