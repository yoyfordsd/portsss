emailjs.send('service_b8mxik5', 'template_xvclood', {
    name: 'sdsdsddsd',
    email: 'fabroayoy00@gmail.com',
    message: 'This is a test message.'
})
.then(function(response) {
    console.log('Success!', response.status, response.text);
}, function(error) {
    console.log('Failed to send email:', error);
});