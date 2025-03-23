document.getElementById("kick-button").addEventListener("click", function() {
    let goal = document.getElementById("goal");
    let randomX = Math.random() * 250; // 250 برای محدود کردن به عرض بازی
    let randomY = Math.random() * 150; // 150 برای محدود کردن به ارتفاع بازی

    goal.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
