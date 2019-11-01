$(function(){
    const questions = $('.question-component');

    questions.map(questionItem => {
        questions[questionItem].addEventListener('click', () => {
            let answer = $(questions[questionItem]).children('.answer');
            let icon = $(questions[questionItem]).children('.icon');
            
            answer.toggle("fast");
            icon.toggleClass('-rotate');
        });
    });
});