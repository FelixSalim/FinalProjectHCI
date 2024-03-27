let carousel_slide = 2;

const getTicketButtons = document.querySelectorAll('.get-tickets-btn');
const emailIcon = document.querySelector('.email-icon');
const chatIcon = document.querySelector('.chat-icon');
const emailHoverIcon = document.querySelector('.email-hover-icon');
const chatHoverIcon = document.querySelector('.chat-hover-icon');

document.querySelector(".book-btn").addEventListener("click", () => {
    window.location.href = "booking.html";
})

function leftSlide(){
    document.querySelector(".prev").removeEventListener("click", leftSlide);
    document.querySelector(".next").removeEventListener("click", rightSlide);
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("active");
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide}`).classList.add("offscreen");
    carousel_slide --;
    document.querySelector(".carousel-slide").style.transform = `translateX(calc(-26.7vw * ${carousel_slide - 1}))`;
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("onscreen")
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("offscreen")
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("active")
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("offscreen")
    document.querySelector(`.img${carousel_slide}`).classList.add("onscreen")
    document.querySelector(`.img${carousel_slide}`).classList.remove("offscreen")
    setTimeout(() => {
        if (carousel_slide === 1){
            document.querySelector(".carousel-slide").style.transition = `0s`;
            document.querySelector(`.img${carousel_slide - 2}`).classList.remove("onscreen")
            document.querySelector(`.img${carousel_slide - 2}`).classList.add("offscreen")
            document.querySelector(`.img${carousel_slide - 1}`).classList.remove("active");
            document.querySelector(`.img${carousel_slide - 1}`).classList.add("offscreen")
            document.querySelector(`.img${carousel_slide}`).classList.remove("onscreen")
            document.querySelector(`.img${carousel_slide}`).classList.add("offscreen")
            carousel_slide = 5;
            document.querySelector(`.img${carousel_slide - 2}`).style.transition = "0s";
            document.querySelector(`.img${carousel_slide - 1}`).style.transition = "0s";
            document.querySelector(`.img${carousel_slide}`).style.transition = "0s";
            document.querySelectorAll(`.img${carousel_slide - 2} p`).forEach((e) => {
                e.style.transition = "0s";
            })
            document.querySelectorAll(`.img${carousel_slide - 1} p`).forEach((e) => {
                e.style.transition = "0s";
            })
            document.querySelectorAll(`.img${carousel_slide} p`).forEach((e) => {
                e.style.transition = "0s";
            })
            document.querySelector(".carousel-slide").style.transform = `translateX(calc(-26.7vw * ${carousel_slide - 1}))`;
            document.querySelector(`.img${carousel_slide - 2}`).classList.add("onscreen")
            document.querySelector(`.img${carousel_slide - 2}`).classList.remove("offscreen")
            document.querySelector(`.img${carousel_slide - 1}`).classList.add("active")
            document.querySelector(`.img${carousel_slide - 1}`).classList.remove("offscreen")
            document.querySelector(`.img${carousel_slide}`).classList.add("onscreen")
            document.querySelector(`.img${carousel_slide}`).classList.remove("offscreen")
            setTimeout(() => {
                document.querySelector(".carousel-slide").style.transition = `1s ease-in-out`;
                document.querySelector(`.img${carousel_slide - 2}`).style.transition = "1s ease-in-out";
                document.querySelector(`.img${carousel_slide - 1}`).style.transition = "1s ease-in-out";
                document.querySelector(`.img${carousel_slide}`).style.transition = "1s ease-in-out";
                document.querySelectorAll(`.img${carousel_slide - 2} p`).forEach((e) => {
                    e.style.transition = "1s ease-in-out";
                })
                document.querySelectorAll(`.img${carousel_slide - 1} p`).forEach((e) => {
                    e.style.transition = "1s ease-in-out";
                })
                document.querySelectorAll(`.img${carousel_slide} p`).forEach((e) => {
                    e.style.transition = "1s ease-in-out";
                })
            }, 50)
        }
    }, 1000)
    setTimeout(() => {
        document.querySelector(".prev").addEventListener("click", leftSlide);
        document.querySelector(".next").addEventListener("click", rightSlide);
    }, 1050)
}

function rightSlide(){
    document.querySelector(".next").removeEventListener("click", rightSlide);
    document.querySelector(".prev").removeEventListener("click", leftSlide);
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("active");
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide}`).classList.add("offscreen");
    carousel_slide ++;
    document.querySelector(".carousel-slide").style.transform = `translateX(calc(-26.7vw * ${carousel_slide - 1}))`;
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("onscreen")
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("offscreen")
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("active")
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("offscreen")
    document.querySelector(`.img${carousel_slide}`).classList.add("onscreen")
    document.querySelector(`.img${carousel_slide}`).classList.remove("offscreen")
    setTimeout(() => {
        if (carousel_slide === 6){
            document.querySelector(".carousel-slide").style.transition = `0s`;
            document.querySelector(`.img${carousel_slide - 2}`).classList.remove("onscreen")
            document.querySelector(`.img${carousel_slide - 2}`).classList.add("offscreen")
            document.querySelector(`.img${carousel_slide - 1}`).classList.remove("active");
            document.querySelector(`.img${carousel_slide - 1}`).classList.add("offscreen")
            document.querySelector(`.img${carousel_slide}`).classList.remove("onscreen")
            document.querySelector(`.img${carousel_slide}`).classList.add("offscreen")
            carousel_slide = 2;
            document.querySelector(`.img${carousel_slide - 2}`).style.transition = "0s";
            document.querySelector(`.img${carousel_slide - 1}`).style.transition = "0s";
            document.querySelector(`.img${carousel_slide}`).style.transition = "0s";
            document.querySelectorAll(`.img${carousel_slide - 2} p`).forEach((e) => {
                e.style.transition = "0s";
            })
            document.querySelectorAll(`.img${carousel_slide - 1} p`).forEach((e) => {
                e.style.transition = "0s";
            })
            document.querySelectorAll(`.img${carousel_slide} p`).forEach((e) => {
                e.style.transition = "0s";
            })
            document.querySelector(".carousel-slide").style.transform = `translateX(calc(-26.7vw * ${carousel_slide - 1}))`;
            document.querySelector(`.img${carousel_slide - 2}`).classList.add("onscreen")
            document.querySelector(`.img${carousel_slide - 2}`).classList.remove("offscreen")
            document.querySelector(`.img${carousel_slide - 1}`).classList.add("active")
            document.querySelector(`.img${carousel_slide - 1}`).classList.remove("offscreen")
            document.querySelector(`.img${carousel_slide}`).classList.add("onscreen")
            document.querySelector(`.img${carousel_slide}`).classList.remove("offscreen")
            setTimeout(() => {
                document.querySelector(".carousel-slide").style.transition = `1s ease-in-out`;
                document.querySelector(`.img${carousel_slide - 2}`).style.transition = "1s ease-in-out";
                document.querySelector(`.img${carousel_slide - 1}`).style.transition = "1s ease-in-out";
                document.querySelector(`.img${carousel_slide}`).style.transition = "1s ease-in-out";
                document.querySelectorAll(`.img${carousel_slide - 2} p`).forEach((e) => {
                    e.style.transition = "1s ease-in-out";
                })
                document.querySelectorAll(`.img${carousel_slide - 1} p`).forEach((e) => {
                    e.style.transition = "1s ease-in-out";
                })
                document.querySelectorAll(`.img${carousel_slide} p`).forEach((e) => {
                    e.style.transition = "1s ease-in-out";
                })
            }, 50)
        }
    }, 1000)
    setTimeout(() => {
        document.querySelector(".next").addEventListener("click", rightSlide);
        document.querySelector(".prev").addEventListener("click", leftSlide);
    }, 1100)
}

document.querySelector(".prev").addEventListener("click", leftSlide)
document.querySelector(".next").addEventListener("click", rightSlide)

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