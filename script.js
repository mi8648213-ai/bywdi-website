// ================================
// BYWDI Website JavaScript
// ================================

// Smooth animation on scroll
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});


// ================================
// Scroll To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0b7d39";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ================================
// Welcome Message
// ================================

window.onload=()=>{

setTimeout(()=>{

alert("Welcome to Bright Youth and Women Development Initiative (BYWDI)");

},600);

};


// ================================
// Current Year
// ================================

const footer=document.querySelector("footer p");

footer.innerHTML="© "+new Date().getFullYear()+" Bright Youth and Women Development Initiative (BYWDI). All Rights Reserved.";


// ================================
// Active Navigation
// ================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});


// ================================
// Console Message
// ================================

console.log("BYWDI Website Loaded Successfully");
// ================================
// OUR TEAM SEARCH
// ================================

const teamSearch = document.getElementById("teamSearch");

if (teamSearch) {

    teamSearch.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".team-card");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ================================
// VIEW PROFILE BUTTON
// ================================

const profileButtons = document.querySelectorAll(".profile-btn");

profileButtons.forEach(button => {

    button.addEventListener("click", function () {

        const staffName = this.parentElement.querySelector("h3").textContent;

        alert("Full profile for " + staffName + " will be available soon.");

    });

});