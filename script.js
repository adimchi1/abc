        function myFunction(){
            const score = document.getElementById('score').value

            if (score <= 20){
                alert('your grade is F')
            } else if(score >= 19 && score < 40){
alert('your grade is E')
            }

 else if (score >= 40 &&    score < 50 ){
    alert('your grade is D')
} else if(score >=50 && score < 60){
    alert('your grade is C')
} else if(score >= 60 && score < 70){
    alert('your grade is B')
} else if(score >= 70 && score <= 100) {
    alert ('your grade is A')
}
             else{
                alert('invalid score')
            }
        }


//         const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const dropdown = document.querySelector(".dropdown");
// const dropbtn = document.querySelector(".dropbtn");

// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("open");
// });

// // Toggle dropdown on mobile click
// dropbtn.addEventListener("click", (e) => {
//     e.preventDefault(); // Prevent default link behavior
//     const dropdownMenu = dropbtn.nextElementSibling;
//     dropdownMenu.classList.toggle("open");
// });
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Hamburger menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? '&#10005;' : '&#9776;'; // Hamburger ↔ Close
});

// // Dropdown toggle
// dropdownToggle.addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent link navigation
//     dropdownMenu.classList.toggle('active');
//     dropdownToggle.innerHTML = dropdownMenu.classList.contains('active') ? '&#9652;' : '&#9662;'; // Up ↔ Down arrow
// });



// Dropdown toggle(s)
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('active');
        toggle.innerHTML = dropdownMenu.classList.contains('active') ? '&#9652;' : '&#9662;';
    });
});
