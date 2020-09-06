var scores,roundscore,activePlayer,winner;
scores=[0,0];
winner=1;
roundscore=0;
activePlayer=0;

document.querySelector('.dice').style.display='none';

// Another method to get or change html content
// this function set the all vanue zero and make game refrish new
function setzero()
{
    document.getElementById('score-0').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-1').textContent=0;
}


document.querySelector('.btn-roll').addEventListener('click',function()
{
     //1. Random number
     var dice =Math.floor(Math.random()*6)+1;

     //2. change the dice
    
    var diceDOM = document.querySelector('.dice');

    //3. update the round score if rolled number is not 1
    if(dice !== 1 && winner === 1)
    {
        diceDOM.style.display='block';
        diceDOM.src = 'dice-' + dice + '.png';
        roundscore+=dice;
        document.querySelector('#current-' + activePlayer).textContent = roundscore;
    }else
    {
        if(winner===1)
        {
            netxPlayer();
        }
       

    }
});


document.querySelector('.btn-hold').addEventListener('click',function()
{
    if(roundscore > 1)
    {
        
        scores[activePlayer]+=roundscore;
        if(scores[activePlayer] >= 100)
        {
            document.querySelector('#name-' + activePlayer).textContent = '!!Winner';
            document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer]; 
            document.querySelector('.dice').style.display='none';
            document.querySelector('#current-' + activePlayer).textContent = 0;
            roundscore =0;
            winner=0;
               
        }else
        {
            
            document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer]; 
            netxPlayer();
         
        }
        
    }
    

});

document.querySelector('.btn-new').addEventListener('click',function()
{
    document.querySelector('.dice').style.display='none';
    document.querySelector('#name-' + activePlayer ).textContent = 'Player ' + (activePlayer+1);
    setzero();
    roundscore=0;
    winner=1;
    scores=[0,0];
    activePlayer=0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');


});

function netxPlayer()
{
    document.querySelector('#current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1:activePlayer = 0;
    roundscore=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';

}
























// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
