const followBtn = document.querySelector(".follow-btn");

followBtn.addEventListener("click", function () {
    if (followBtn.textContent === "Follow") {
        followBtn.textContent = "Following";
    } else {
        followBtn.textContent = "Follow";
    }
});
