console.log("loaded Emptylink.js")
let idLinks = document.querySelectorAll(".nav a");

for (const link of idLinks) {
    link.addEventListener("click", () => {
        alert("Sorry, the link doesn't work."); 
    })
}