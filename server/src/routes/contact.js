import express from 'express'
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const router = express.Router()
router.post('/api/send-email', async (req, res) => {
    const { name, phone, content } = req.body;
    // Tạo cấu hình gửi email
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Hoặc các dịch vụ khác như Mailgun, SendGrid
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });
    // Tạo email
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'your-email@gmail.com',
        subject: `Liên hệ từ ${name}`,
        text: `Tên: ${name}\nSố điện thoại: ${phone}\nNội dung: ${content}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent');
    } catch (error) {
        res.status(500).send('Failed to send email');
    }

})
