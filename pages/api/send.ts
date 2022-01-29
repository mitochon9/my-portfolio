const sgMail = require("@sendgrid/mail");

export default async function handler(req: any, res: any) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { companyName, email, message, name } = req.body;

  const content = {
    to: email,
    from: "mitochon9@gmail.com",
    subject: "お問合せありがとうございました。",
    text:
      "お問い合わせありがとうございます。順次回答いたしますのでお待ちください。" +
      message +
      "高橋 信次(たかはし しんじ) Email: mitochon9@gmail.com",
    html: `
    <div>
      <h2>お問い合わせを受け付けました。回答をお待ち下さい。</h2>
      <h2>${companyName} ${name} 様</h2>
      <p>お問い合わせありがとうございます。順次回答いたしますのでお待ちください。</p>

      <br/>

      <p>お問い合わせ内容</p>

      <p>------------------------------------------------</p>

      <div>
        ${message}
      </div>

      <p>------------------------------------------------</p>

      <br/>
      <br/>

      <div>
        <p>------------------------------------------------</p>
        <p>高橋 信次(たかはし しんじ)</p>
        <p>Email: mitochon9@gmail.com</p>


        <div>
          <span>Website: </span>
          <a href='#'>https://sample.com</a>
        </div>
        <p>------------------------------------------------</p>
      </div>
    </div>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error: any) {
    alert(error.message);
    res.status(400).send("Message not sent.");
  }
}
