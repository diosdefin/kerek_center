const texts = [
    'Сен ийгилике жетесин',
    'Вы преуспеете',
    'You will succeed',
    'Tu réussiras',
    'Ты достигнешь успеха'
];
let currentIndex = 0;

function typeText(text, element, callback) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(callback, 1500); // Задержка перед началом исчезновения текста
        }
    }
    type();
}

function deleteText(element, callback) {
    let text = element.innerHTML;
    function erase() {
        if (text.length > 0) {
            text = text.slice(0, -1);
            element.innerHTML = text;
            setTimeout(erase, 50);
        } else {
            setTimeout(callback, 500); // Задержка перед началом печати нового текста
        }
    }
    erase();
}

function changeText() {
    const textElement = document.getElementById('changing-text');
    textElement.classList.add('hidden');
    setTimeout(() => {
        deleteText(textElement, () => {
            currentIndex = (currentIndex + 1) % texts.length;
            textElement.classList.remove('hidden');
            typeText(texts[currentIndex], textElement, changeText);
        });
    }, 1000);
}

// Начать анимацию печати при загрузке страницы
window.onload = () => {
    changeText();
};





document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background-music");
    var button = document.getElementById("toggle-music");
  
    button.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        button.textContent = "⏸︎";
      } else {
        audio.pause();
        button.textContent = "▶";
      }
    });
  });
  