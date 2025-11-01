// Contact form handling
function sendEmail(event) {
    event.preventDefault();
    
    const form = event.target;
    const sendBtn = form.querySelector('.send-btn');
    const email = form.email.value;
    const name = form.name.value;
    const subject = form.subject.value;
    const message = form.message.value;
    
    // Disable button and show loading state
    sendBtn.disabled = true;
    sendBtn.classList.add('is-loading');
    sendBtn.textContent = 'Enviando...';
    
    // Create mailto link as fallback
    const mailtoLink = `mailto:alan.alb.flopes@gmail.com?subject=${encodeURIComponent(subject || 'Contato via Portfolio')}&body=${encodeURIComponent(`De: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    // For demonstration purposes, we'll use a simple alert
    // In production, you would integrate with EmailJS or another email service
    setTimeout(() => {
        try {
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            sendBtn.classList.remove('is-loading');
            sendBtn.style.backgroundColor = '#48c774';
            sendBtn.textContent = 'Enviado!';
            sendBtn.disabled = false;
            
            // Reset form
            form.reset();
            
            // Reset button after delay
            setTimeout(() => {
                sendBtn.textContent = 'Enviar';
            }, 2000);
        } catch (error) {
            // Show error message
            sendBtn.classList.remove('is-loading');
            sendBtn.style.backgroundColor = '#f14668';
            sendBtn.textContent = 'Erro!';
            sendBtn.disabled = false;
            
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
            
            // Reset button after delay
            setTimeout(() => {
                sendBtn.textContent = 'Enviar';
                sendBtn.style.backgroundColor = '#48c774';
            }, 2000);
        }
    }, 800);
    
    return false;
}

// Optional: EmailJS integration
// Uncomment and configure if you want to use EmailJS
/*
function sendEmailWithEmailJS(email, name, subject, message) {
    // Initialize EmailJS with your user ID
    emailjs.init('YOUR_USER_ID');
    
    const templateParams = {
        from_name: subject ? `${name} - Assunto: ${subject}` : name,
        to_name: email,
        message: message,
        reply_to: 'alan.alb.flopes@gmail.com'
    };
    
    return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
}
*/
