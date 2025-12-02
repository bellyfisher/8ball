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
        image = 'yes.png'
        color = 'text-success';

        case 1:
        answer = 'Signs are pointing to Yes.'
        image = 'okay.png'
        color = 'text-success';

        case 2:
        answer = 'You may rely on it.'
        image = 'maybe.png'
        color = 'text-success';
        
        case 3:
        answer = 'Pretty Much.'
        image = 'sure.png'
        color = 'text-secondary';

        case 4:
        answer = 'Hazy answer..'
        image = 'hazy.png'
        color = 'text-warning';

        case 5:
        answer = 'Do not count on it..'
        image = 'wouldnt.png'
        color = 'text-warning';

        case 6:
        answer = 'Signs point towards no..'
        image = 'prollynot.png'
        color = 'text-danger';

        case 7:
        answer = 'No.'
        image = 'no.png'
        color = 'text-danger';
        break;
    }

        document.getElementById('response-text').innerText= answer
        document.getElementById('response-text').classList= `display-4 text-center strong ${color}`
        document.getElementById('response-img').src= image

}
