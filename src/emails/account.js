// API KEY : 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

const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const senderEmail = 'sander.tonning13@gmail.com'

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: senderEmail,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: senderEmail,
        subject: 'Task App cancellation',
        text: `Sorry to see you leave ${name}. We hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}