// const buttons = document.querySelectorAll("header button");
// const sections = document.querySelectorAll(".part"); 

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const target = button.dataset.target;

//     sections.forEach(sec => sec.classList.remove("active"));
//     document.getElementById(target).classList.add("active");
//   });
// });

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       } else {
//         entry.target.classList.remove("show"); // 👈 KEY FIX
//       }
//     });
//   },
//   {
//     threshold: 0.3
//   }
// );

// document.querySelectorAll(".hidden").forEach(el => {
//   observer.observe(el);
// });

// Smooth scroll navigation
const buttons = document.querySelectorAll("header button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.dataset.target;
        document.getElementById(target).scrollIntoView({ 
            behavior: "smooth" 
        });
    });
});

// Scroll animation observer
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

document.querySelectorAll(".section-wrapper").forEach(el => {
    observer.observe(el);
});
