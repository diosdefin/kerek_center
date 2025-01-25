document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        {
            title: 'Название курса 1',
            chapters: [
                {title: 'Урок 1: Введение', description: 'Описание урока 1', videoLink: 'https://www.youtube.com/embed/example1'},
                {title: 'Урок 2: Основы', description: 'Описание урока 2', videoLink: 'https://www.youtube.com/embed/example2'}
            ]
        },
        {
            title: 'Название курса 2',
            chapters: [
                {title: 'Урок 1: Введение', description: 'Описание урока 1', videoLink: 'https://www.youtube.com/embed/example3'},
                {title: 'Урок 2: Основы', description: 'Описание урока 2', videoLink: 'https://www.youtube.com/embed/example4'}
            ]
        }
    ];

    const coursesContainer = document.querySelector('.courses');

    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        
        const courseTitle = document.createElement('h2');
        courseTitle.textContent = course.title;
        courseElement.appendChild(courseTitle);

        const chaptersElement = document.createElement('div');
        chaptersElement.classList.add('chapters');
        courseElement.appendChild(chaptersElement);

        course.chapters.forEach(chapter => {
            const detailsElement = document.createElement('details');
            const summaryElement = document.createElement('summary');
            summaryElement.textContent = chapter.title;
            detailsElement.appendChild(summaryElement);

            const contentElement = document.createElement('div');
            contentElement.classList.add('chapter-content');
            contentElement.innerHTML = `
                <p>${chapter.description}</p>
                <iframe width="560" height="315" src="${chapter.videoLink}" frameborder="0" allowfullscreen></iframe>
            `;
            detailsElement.appendChild(contentElement);
            
            chaptersElement.appendChild(detailsElement);
        });

        coursesContainer.appendChild(courseElement);
    });
});
