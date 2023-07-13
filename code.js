    let catchMe = document.querySelector('.catchMe'); //THE BTN 
    let dipslayScore = document.getElementById('displayScore'); //  where the score is displayed 
    let score = 0;
    // the addevent listen said i used a document inmstead of the btn itself 


    function game()
    {
        catchMe.addEventListener('click', game)
        score++;
        dipslayScore.textContent="YOUR SCORE IS :" + score;
        catchMe.innerHTML="dang it"  
        
        //how to make the btn go back to catch me text    

        // if(catchMe.innerHTML=== "catch me"){
        //     catchMe.innerHTML= "dang it"
        // } else
        // {
        // catchMe.innerHTML ="catch me again"
        // }

        // making the code stop at 100
        // how would i stop the code from running
        if(score >= 13){
            alert(" WELL DONE YOU GOT " + score )
            catchMe.disabled = true; //disabling the buttn once high is met 
       
    
    }
}





