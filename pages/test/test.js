//block menu
let open = document.getElementById("open");
let block = document.getElementById("block");
function Open() {
  open.style.display = "block";
  block.style.transition = "right 0.3s";
  setTimeout(function () {
    block.style.right = "0";
  }, 50);
}
function Close() {
  block.style.right = "-300px";
  block.style.transition = "right 0.3s";
  setTimeout(function () {
    open.style.display = "none";
  }, 400);
}
let ops = document.getElementById("ops");
ops.addEventListener("click", (event) => {
  event.preventDefault();
  Open();
});
let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  Close();
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("fixedAnchor").classList.add('show');
  } else {
    document.getElementById("fixedAnchor").classList.remove('show');
  }
}

// общий тест
function calculateScore() {
  const questions = [
    {
      question: "1. Что означает аббревиатура HTML?",
      options: [
        "a) Hyper Text Markup Language",
        "b) High Tech Multimedia Language",
        "c) Hard to Make Links",
      ],
      correctAnswer: "a",
    },
    {
      question: "2. Какой тег используется для создания заголовка в HTML?",
      options: ["a) &lt;title&gt;", "b) &lt;head&gt;", "c) &lt;h1&gt;"],
      correctAnswer: "c",
    },
    {
      question:
        "3. Какая функция используется для вывода текста в консоль в языке программирования JavaScript?",
      options: [
        "a) console.print()",
        "b) document.write()",
        "c) console.log()",
      ],
      correctAnswer: "c",
    },
    {
      question:
        "4. Какой символ обычно используется для обозначения комментариев в языке программирования Python?",
      options: ["a) //", "b) --", "c) #"],
      correctAnswer: "c",
    },
    {
      question: "5. Что делает оператор '++' в языке программирования C++?",
      options: [
        "a) Уменьшает значение на 1",
        "b) Увеличивает значение на 1",
        "c) Удваивает значение",
      ],
      correctAnswer: "b",
    },
    {
      question:
        "6. Какой метод используется для добавления элемента в конец массива в языке программирования Java?",
      options: ["a) add()", "b) append()", "c) push()"],
      correctAnswer: "c",
    },
    {
      question:
        "7. Какой язык программирования часто используется для создания веб-сайтов с динамическим содержимым?",
      options: ["a) HTML", "b) CSS", "c) PHP"],
      correctAnswer: "c",
    },
    {
      question:
        "8. Какой оператор используется для сравнения двух значений по содержимому и типу в языке программирования JavaScript?",
      options: ["a) ==", "b) ===", "c) ="],
      correctAnswer: "b",
    },
    {
      question:
        "9. Какой термин используется для обозначения переменной, которая ссылается на объект в языке программирования Java?",
      options: ["a) Индекс", "b) Указатель", "c) Ссылка"],
      correctAnswer: "c",
    },
    {
      question: "10. Что такое IDE в контексте программирования?",
      options: [
        "a) Интерфейс разработки игр",
        "b) Интегрированная среда разработки",
        "c) Интерпретатор динамического языка",
      ],
      correctAnswer: "b",
    },
  ];

  let score = 0;

  // Reset classes
  const allOptions = document.querySelectorAll(".options div");
  allOptions.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("wrong");
  });


  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(
      `input[name="q${index + 1}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
      selectedAnswer.parentNode.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.parentNode.classList.add("wrong");
    }
  });

  // Вывод результата
  let resultDiv = document.getElementById("result11");
  resultDiv.textContent = `Ваш результат: ${score} из ${questions.length}.`;
}

//java
function calculateJavaScorejava() {
  const questions = [
    {
      question: "1. Что такое Java Virtual Machine (JVM)?",
      options: [
        "a) Это виртуальная машина, которая выполняет Java-программы",
        "b) Это компилятор Java-кода",
        "c) Это среда разработки Java",
      ],
      correctAnswer: "a",
    },
    {
      question: "2. Как объявить переменную в Java?",
      options: ["a) var x = 10;", "b) let x = 10;", "c) int x = 10;"],
      correctAnswer: "c",
    },
    {
      question: "3. Как создать новый объект в Java?",
      options: ["a) new Object();", "b) create Object();", "c) Object();"],
      correctAnswer: "a",
    },
    {
      question: "4. Как называется метод без возвращаемого значения в Java?",
      options: ["a) void method();", "b) int method();", "c) return method();"],
      correctAnswer: "a",
    },
    {
      question: "5. Какие модификаторы доступа используются в Java?",
      options: [
        "a) public, private, protected",
        "b) open, closed, protected",
        "c) inner, outer, nested",
      ],
      correctAnswer: "a",
    },
    {
      question: "6. Что такое конструктор в Java?",
      options: [
        "a) Это метод, который вызывается для уничтожения объекта",
        "b) Это метод, который вызывается для создания объекта",
        "c) Это метод, который вызывается для копирования объекта",
      ],
      correctAnswer: "b",
    },
    {
      question: "7. Что такое ключевое слово 'final' в Java?",
      options: [
        "a) Это ключевое слово, которое обозначает последний метод в классе",
        "b) Это ключевое слово, которое обозначает, что переменная не может быть изменена",
        "c) Это ключевое слово, которое обозначает абстрактный метод",
      ],
      correctAnswer: "b",
    },
    {
      question:
        "8. Какая структура данных используется для хранения элементов в порядке FIFO (First-In-First-Out) в Java?",
      options: ["a) Стек (Stack)", "b) Очередь (Queue)", "c) Массив (Array)"],
      correctAnswer: "b",
    },
    {
      question:
        "9. Какой оператор используется для выполнения множественного выбора в Java?",
      options: ["a) if-else", "b) switch-case", "c) for-loop"],
      correctAnswer: "b",
    },
    {
      question: "10. Что такое Java API?",
      options: [
        "a) Это интерфейс программирования приложений для языка JavaScript",
        "b) Это стандартная библиотека классов, предоставляемая Java",
        "c) Это спецификация языка Java",
      ],
      correctAnswer: "b",
    },
  ];

  let score = 0;

  // Reset classes
  const allOptions = document.querySelectorAll(".options div");
  allOptions.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("wrong");
  });

  // Check answers
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(
      `input[name="w${index + 1}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
      selectedAnswer.parentNode.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.parentNode.classList.add("wrong");
    }
  });

  // Output result
  let resultDiv = document.getElementById("result1");
  resultDiv.textContent = `Ваш результат: ${score} из ${questions.length}.`;
}

//css
function calculateCSSScore() {
  const questions = [
    { question: "1. Что такое селектор в CSS?", options: ["a) Это элемент HTML, который вы хотите стилизовать", "b) Это спецификация CSS, определяющая правила стилизации", "c) Это паттерн, который определяет, какие элементы будут стилизованы"], correctAnswer: "a" },
    { question: "2. Как изменить цвет текста в CSS?", options: ["a) color: red;", "b) text-color: red;", "c) font-color: red;"], correctAnswer: "a" },
    { question: "3. Как задать отступы вокруг элемента в CSS?", options: ["a) margin: 10px;", "b) padding: 10px;", "c) space: 10px;"], correctAnswer: "a" },
    { question: "4. Как указать размер шрифта в CSS?", options: ["a) font-size: 16px;", "b) size: 16px;", "c) text-size: 16px;"], correctAnswer: "a" },
    { question: "5. Как указать фоновый цвет элемента в CSS?", options: ["a) background-color: blue;", "b) bg-color: blue;", "c) color-background: blue;"], correctAnswer: "a" },
    { question: "6. Что такое псевдоэлементы в CSS?", options: ["a) Это классы, которые можно использовать только для одного элемента", "b) Это элементы, которые можно создавать только с помощью JavaScript", "c) Это дополнительные элементы, которые можно стилизовать как обычные элементы"], correctAnswer: "c" },
    { question: "7. Как изменить ширину рамки элемента в CSS?", options: ["a) border-width: 2px;", "b) border-size: 2px;", "c) border-style: 2px;"], correctAnswer: "a" },
    { question: "8. Как задать полупрозрачность фона элемента в CSS?", options: ["a) background-opacity: 0.5;", "b) opacity: 0.5;", "c) bg-opacity: 0.5;"], correctAnswer: "b" },
    { question: "9. Как задать выравнивание текста по центру в CSS?", options: ["a) text-align: center;", "b) align-text: center;", "c) align: center;"], correctAnswer: "a" },
    { question: "10. Как задать границы вокруг элемента в CSS?", options: ["a) border: 1px solid black;", "b) outline: 1px solid black;", "c) frame: 1px solid black;"], correctAnswer: "a" }
  ];

  let score = 0;

  // Reset classes
  const allOptions = document.querySelectorAll(".options div");
  allOptions.forEach((option) => { option.classList.remove("correct"); option.classList.remove("wrong"); });

  // Check answers
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="css${index + 1}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
      selectedAnswer.parentNode.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.parentNode.classList.add("wrong");
    }
  });

  // Output result
  let resultDiv = document.getElementById("cssResult");
  resultDiv.textContent = `Ваш результат: ${score} из ${questions.length}.`;
}

//js
function calculateJSScore() {
  const questions = [
    {
      question: "1. Что такое JavaScript?",
      options: [
        "a) Язык программирования для разработки веб-приложений",
        "b) Средство стилизации веб-страниц",
        "c) Технология для создания баз данных",
      ],
      correctAnswer: "a",
    },
    {
      question: "2. Что такое DOM?",
      options: [
        "a) Document Object Model - объектная модель документа, представляющая структуру HTML и XML документов",
        "b) Data Object Model - модель данных, представляющая информацию в формате JSON",
        "c) Design Object Model - модель объектов, используемая для структурирования дизайна в веб-разработке",
      ],
      correctAnswer: "a",
    },
    {
      question: "3. Что такое переменная в JavaScript?",
      options: [
        "a) Значение, которое может изменяться во время выполнения программы",
        "b) Место в памяти, где хранится информация",
        "c) Структура данных для хранения коллекций значений различных типов",
      ],
      correctAnswer: "a",
    },
    {
      question: "4. Какая функция используется для вывода информации в консоль в JavaScript?",
      options: [
        "a) console.log()",
        "b) print()",
        "c) alert()",
      ],
      correctAnswer: "a",
    },
    {
      question: "5. Что такое условные операторы в JavaScript?",
      options: [
        "a) Операторы для создания циклов",
        "b) Операторы для выполнения различных действий в зависимости от условий",
        "c) Операторы для выполнения математических операций",
      ],
      correctAnswer: "b",
    },
    {
      question: "6. Как объявить переменную в JavaScript?",
      options: [
        "a) let x = 10;",
        "b) int x = 10;",
        "c) var x = 10;",
      ],
      correctAnswer: "c",
    },
    {
      question: "7. Что такое массив в JavaScript?",
      options: [
        "a) Структура данных для хранения пар ключ-значение",
        "b) Упорядоченная коллекция элементов любого типа",
        "c) Метод объекта для изменения его свойств",
      ],
      correctAnswer: "b",
    },
    {
      question: "8. Какие типы данных существуют в JavaScript?",
      options: [
        "a) Только числа и строки",
        "b) Числа, строки, булевы значения, объекты, null, undefined",
        "c) Только объекты",
      ],
      correctAnswer: "b",
    },
    {
      question: "9. Какое ключевое слово используется для объявления функции в JavaScript?",
      options: [
        "a) function",
        "b) def",
        "c) class",
      ],
      correctAnswer: "a",
    },
    {
      question: "10. Что такое цикл в JavaScript?",
      options: [
        "a) Структура данных для хранения упорядоченной коллекции элементов",
        "b) Оператор, позволяющий выполнить блок кода несколько раз",
        "c) Метод объекта для выполнения асинхронных операций",
      ],
      correctAnswer: "b",
    },
  ];

  let score = 0;

  // Сброс классов
  const allOptions = document.querySelectorAll(".options div");
  allOptions.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("wrong");
  });

  // Проверка ответов
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="js${index + 1}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
      selectedAnswer.parentNode.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.parentNode.classList.add("wrong");
    }
  });

  // Вывод результатов
  let resultDiv = document.getElementById("jsResult");
  resultDiv.textContent = `Ваш результат: ${score} из ${questions.length}.`;
}


//c++
function calculateCppScore() {
  const questions = [
    {
      question: "1. Что такое C++?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "2. Какая из ниже перечисленных особенностей не относится к C++?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "3. Как объявить переменную в C++?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "4. Какой символ используется для комментирования кода в C++?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "5. Какая функция используется для вывода данных в консоль в C++?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "6. Что такое оператор if в C++?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "7. Как объявить функцию в C++?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "8. Как называется оператор, который используется для получения остатка от деления в C++?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "9. Как объявить массив в C++?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "10. Какой тип данных используется для хранения дробных чисел в C++?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
  ];

  let score = 0;

  // Reset classes
  const allOptions = document.querySelectorAll(".options div");
  allOptions.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("wrong");
  });

  // Check answers
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="cpp${index + 1}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
      selectedAnswer.parentNode.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.parentNode.classList.add("wrong");
    }
  });

  // Output result
  let resultDiv = document.getElementById("cppResult");
  resultDiv.textContent = `Ваш результат: ${score} из ${questions.length}.`;
}

//python
function calculatePythonScore() {
  const questions = [
    {
      question: "1. Что такое Python?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "2. Как объявить переменную в Python?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "3. Какой символ используется для комментирования кода в Python?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "4. Как создать функцию в Python?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "5. Какая функция используется для вывода данных в консоль в Python?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "6. Что такое условный оператор if в Python?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "7. Как объявить список в Python?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "8. Как называется оператор, который используется для получения остатка от деления в Python?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "9. Как создать кортеж в Python?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "10. Какой тип данных используется для хранения дробных чисел в Python?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
  ];

  let score = 0;

  // Reset classes
  const allOptions = document.querySelectorAll(".options div");
  allOptions.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("wrong");
  });

  // Check answers
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="python${index + 1}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
      selectedAnswer.parentNode.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.parentNode.classList.add("wrong");
    }
  });

  // Output result
  let resultDiv = document.getElementById("pythonResult");
  resultDiv.textContent = `Ваш результат: ${score} из ${questions.length}.`;
}

//c#
function calculateCSharpScore() {
  const questions = [
    {
      question: "1. Что такое C#?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "2. Как объявить переменную в C#?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "3. Как объявить метод в C#?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "4. Как создать массив в C#?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "5. Какой тип данных используется для хранения текста в C#?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "6. Какая конструкция используется для циклического выполнения кода в C#?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "7. Как объявить класс в C#?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "8. Какой модификатор доступа используется для членов класса, доступных только внутри самого класса в C#?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "9. Какой оператор используется для сравнения двух значений по ссылке в C#?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "10. Что такое конструктор в C#?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
  ];

  let score = 0;

  // Reset classes
  const allOptions = document.querySelectorAll(".options div");
  allOptions.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("wrong");
  });

  // Check answers
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="csharp${index + 1}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
      selectedAnswer.parentNode.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.parentNode.classList.add("wrong");
    }
  });

  // Output result
  let resultDiv = document.getElementById("csharpResult");
  resultDiv.textContent = `Ваш результат: ${score} из ${questions.length}.`;
}

//html
function calculateHtmlScore() {
  const questions = [
    {
      question: "1. Что расшифровывается аббревиатура HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "2. Как создать заголовок в HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "3. Какой тег используется для создания ссылки в HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "4. Какой тег используется для создания списка в HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "5. Как добавить изображение в HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "6. Какой атрибут используется для задания заголовка изображения в HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "7. Как создать абзац текста в HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "8. Какой тег используется для создания таблицы в HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "9. Как добавить комментарий в HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "10. Какой тег используется для создания формы в HTML?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
  ];

  let score = 0;

  // Reset classes
  const allOptions = document.querySelectorAll(".options div");
  allOptions.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("wrong");
  });

  // Check answers
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="html${index + 1}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
      selectedAnswer.parentNode.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.parentNode.classList.add("wrong");
    }
  });

  // Output result
  let resultDiv = document.getElementById("htmlResult");
  resultDiv.textContent = `Ваш результат: ${score} из ${questions.length}.`;
}

//php
function calculatePhpScore() {
  const questions = [
    {
      question: "1. Что расшифровывается аббревиатура PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "2. Как объявить переменную в PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "3. Какой символ используется для комментирования кода в PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "4. Как выводить текст на экран в PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "5. Как объявить функцию в PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "6. Какой оператор используется для проверки равенства значений и типов в PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
    {
      question: "7. Какие операторы используются для инкремента и декремента переменной в PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "8. Какие типы данных используются в PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "a",
    },
    {
      question: "9. Как подключить файл в PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "b",
    },
    {
      question: "10. Какие скобки используются для определения массива в PHP?",
      options: ["a", "b", "c"],
      correctAnswer: "c",
    },
  ];

  let score = 0;

  // Reset classes
  const allOptions = document.querySelectorAll(".options div");
  allOptions.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("wrong");
  });

  // Check answers
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="php${index + 1}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
      score++;
      selectedAnswer.parentNode.classList.add("correct");
    } else if (selectedAnswer) {
      selectedAnswer.parentNode.classList.add("wrong");
    }
  });

  // Output result
  let resultDiv = document.getElementById("phpResult");
  resultDiv.textContent = `Ваш результат: ${score} из ${questions.length}.`;
}



document.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll(".grid-for-content2 a");

  anchors.forEach(anchor => {
    anchor.addEventListener("click", function (event) {

      event.preventDefault();


      anchors.forEach(a => {
        a.classList.remove("active");
      });


      anchor.classList.add("active");


      anchors.forEach(a => {
        if (!a.classList.contains("active")) {
          a.style.color = "gray";
        } else {
          a.style.color = "";
        }
      });
    });
  });
});