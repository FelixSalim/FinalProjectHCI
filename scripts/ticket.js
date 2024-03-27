const getTicketButtons = document.querySelectorAll('.get-tickets-btn');
const emailIcon = document.querySelector('.email-icon');
const chatIcon = document.querySelector('.chat-icon');
const emailHoverIcon = document.querySelector('.email-hover-icon');
const chatHoverIcon = document.querySelector('.chat-hover-icon');

getTicketButtons.forEach((btn) =>  {
    btn.addEventListener('click', () => {
        window.location.href = 'booking.html';
    })
})

chatIcon.addEventListener('click', () => {
    window.open('https://wa.me/082134492031');
})

emailIcon.addEventListener('click', () => {
    window.open('mailto:info@email.com');
})

emailIcon.addEventListener('mouseover', () => {
    emailHoverIcon.classList.remove('hidden');
    emailIcon.classList.add('hidden');
})

emailIcon.addEventListener('mouseout', () => {
    emailHoverIcon.classList.add('hidden');
    emailIcon.classList.remove('hidden');
})

chatIcon.addEventListener('mouseover', () => {
    chatHoverIcon.classList.remove('hidden');
    chatIcon.classList.add('hidden');
})

chatIcon.addEventListener('mouseout', () => {
    chatHoverIcon.classList.add('hidden');
    chatIcon.classList.remove('hidden');
})