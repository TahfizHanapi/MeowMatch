const container = document.getElementById("summaryContainer");
const likedCats = JSON.parse(localStorage.getItem("likedCats")) || [];

if (likedCats.length === 0) {
    container.innerHTML = "<p>No liked cats found.</p>";
} else {
    likedCats.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.className = "liked-cat";
    container.appendChild(img);
    });
}

function restart() {
    localStorage.removeItem("likedCats");
    window.location.href = "/";
}