/*document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", () =>{
  
    if(question.parentNode.classList.contains("active")){
        question.parentNode.classList.toggle("active")
      
    }
    else{
        document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))
        question.parentNode.classList.add("active")
    }

})) */

var numberOfQuestions = document.querySelectorAll('.question').length;

for (var i = 0; i < numberOfQuestions; i++) {

    document.querySelectorAll('.question')[i].addEventListener('click', function() {
       
       this.parentNode.classList.toggle('active');

    })

}

