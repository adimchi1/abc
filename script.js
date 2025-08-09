        function myFunction(){
            const score = document.getElementById('score').value

            if (score <= 20){
                alert('your grade is F')
            } else if(score >= 19 && score < 40){
alert('your grade is E')
            }

 else if (score >= 40 &&    score < 50 ){
    alert('your grade is D')
} else if(score >=50 && score < 60){
    alert('your grade is C')
} else if(score >= 60 && score < 70){
    alert('your grade is B')
} else if(score >= 70 && score <= 100) {
    alert ('your grade is A')
}
             else{
                alert('invalid score')
            }
        }