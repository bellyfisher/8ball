function shakeMagic8Ball(){
    const question = prompt("What is to be asked of the Magic 8-Ball?");

    if(question === null){
        document.getElementById('response-text').innerText= 'Reply Hazy, Please Try Again.'
        document.getElementById('response-text').classList= 'lead text-danger'
         document.getElementById('response-img').src= 'tryAgain.png'
    }

    if (!question.trim()){
        alert('You should ask a valid question! :[')
    }


    const randomNumber= Math.floor(Math.random()*8);
    let answer, image, color;
        
    switch(randomNumber){
        case 0:
        answer = 'Yes!'
        image = 'yes2.png'
        color = 'text-success';
break;


        case 1:
        answer = 'Signs are pointing to Yes.'
        image = 'pointing.png'
        color = 'text-success';
break;


        case 2:
        answer = 'You may rely on it.'
        image = 'rely.png'
        color = 'text-success';
break;

        
        case 3:
        answer = 'Pretty Much.'
        image = 'sure.png'
        color = 'text-secondary';
break;


        case 4:
        answer = 'Hazy answer..'
        image = 'hazy.png'
        color = 'text-warning';
break;


        case 5:
        answer = 'Do not count on it..'
        image = 'count.png'
        color = 'text-warning';
break;


        case 6:
        answer = 'Signs point towards no..'
        image = 'prollynot.png'
        color = 'text-danger';
break;

        case 7:
        answer = 'The outlook is not so good...'
        image = 'not.gif'
        color = 'text-danger';
        break;
    }

        document.getElementById('response-text').innerText= answer
        document.getElementById('response-text').classList= `display-4 text-center strong ${color}`
        document.getElementById('response-img').src= image

}
