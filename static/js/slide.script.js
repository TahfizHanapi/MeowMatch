let cats = [], current = 0, liked = [];

async function loadCats() {
const res = await fetch("/meowmatch");
if (!res.ok) {
    alert("Failed to fetch cat images!");
    return;
}

cats = await res.json();
if (cats.length === 0) {
    document.getElementById("cat-container").innerHTML = `<p>No cats available.</p>`;
    return;
}

showCat();
}

function showCat() {
if (current >= cats.length) {
    // Save to localStorage and redirect to summary
    localStorage.setItem("likedCats", JSON.stringify(liked));
    window.location.href = "/summary"; 
    return;
}

const container = document.getElementById("cat-container");
container.innerHTML = `<div class="cat-card"><img src="${cats[current]}" /></div>`;
const hammer = new Hammer(container.querySelector(".cat-card"));
hammer.on("swipeleft", () => nextCat(false));
hammer.on("swiperight", () => nextCat(true));
}

function nextCat(like) {
if (like) liked.push(cats[current]);
current++;
showCat();
}

function showSummary() {
localStorage.setItem("likedCats", JSON.stringify(liked));
window.location.href = "/summary";
}

loadCats();