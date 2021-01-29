var numberOfQuestions = document.querySelectorAll('.question').length;

for (var i = 0; i < numberOfQuestions; i++) {

    document.querySelectorAll('.question')[i].addEventListener('click', function() {
       
       this.parentNode.classList.toggle('active');

    })

}

