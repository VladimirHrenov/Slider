const slider = document.querySelector('.slider');
const sliderImage = document.querySelectorAll('.slider_img');
const sliderLine = document.querySelector('.slider_line');
const sliderDots = document.querySelectorAll('.slider_dot');

const sliderBtnNext = document.querySelector('.slider_btn-next');
const sliderBtnPrev = document.querySelector('.slider_btn-prev');

let sliderCount = 0;  //счетчик
let sliderWidth; //ширина области слайдера

window.addEventListener('resize', showSlide); // реакция на событие изменение экрана (адаптивность) 

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImage.length + 'px';
    sliderImage.forEach(item => item.style.width = sliderWidth + 'px'); // каждому слайду задаем ширину области слайрера

}

showSlide();

sliderBtnNext.addEventListener('click', nextSlade);

sliderBtnPrev.addEventListener('click', prevSlade);

function nextSlade() {
    sliderCount++;  // увеличивает счетчик на единицу по клику
    if(sliderCount >= sliderImage.length) {
        sliderCount = 0;
    } // если счетчик больше чем длинны всех элементов, он обнуляется(элементов в массиве этой переменной 3 и длинна массива равна 3)
    rollSlider();
    thisSlide(sliderCount); // передаем в функцию значение счетчика, имеенно ему и передастся класс
}

function prevSlade() {
    sliderCount--; // уменьшает счетчик на единицу по клику
    if(sliderCount < 0) {
        sliderCount = sliderImage.length -1;
    } // если счетчик меньше ноля, возвращается к последнему элементу
    rollSlider();
    thisSlide(sliderCount);
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot')); //перебирает и удаляет со всех вложенных класс
    sliderDots[index].classList.add('active-dot'); //добавляет класс активному
}


function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`; // добавляет свойство  
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index; // задаем свой счетчик
        rollSlider();
        thisSlide(sliderCount);
    })
}) // переход по клику 

setInterval(() => {
    nextSlade()
}, 6000); //перелистывание по интервалу