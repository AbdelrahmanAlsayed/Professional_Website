let scroller = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
    let height =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    let progress = (scrollTop / height) * 100;

    scroller.style.width = `${progress}%`;
});


let skillsSection = document.querySelector(".skills");
let SkillsSpans = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", () => {
    if(window.scrollY >= skillsSection.offsetTop) {
        SkillsSpans.forEach((span) => {
            span.style.width = span.dataset.progress;
        })
    }
});


let statsSection = document.querySelector(".stats");
let statsSpan = document.querySelectorAll(".increment");
let started = false; // function started ? no 


window.addEventListener("scroll", () => {
    if(window.scrollY >= statsSection.offsetTop - 100) {
        if(!started) {
            statsSpan.forEach((span) => startCount(span));
        }
        started = true;
    }
});

function startCount(element) {
    let goal = element.dataset.progress;
    let counter = setInterval(() => {
        element.textContent++;
        if(element.textContent == goal) {
            clearInterval(counter);
        }
    }, 1000 / goal)
}

let arrowToTop = document.querySelector(".arrow-top");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 600) arrowToTop.classList.add("show");
    else arrowToTop.classList.remove("show");
});

arrowToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
