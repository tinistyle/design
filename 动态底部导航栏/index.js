let items = document.getElementsByClassName("item");
let mask = document.getElementById('mask');
let currentIndex = 0;

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        this.classList.add('active');
        items[currentIndex].classList.remove('active');
        currentIndex = i;
        mask.style.left = `${currentIndex * 130}px`;
    })
}