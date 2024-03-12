
    document.querySelector("#rock").addEventListener('click', playRock)
    document.querySelector('.paper').addEventListener('click', playPaper)
    document.querySelector('.scissor').addEventListener('click', playScissor)

    let human = ''
    let array = ['rock', 'paper', 'scissor']

    function check(){
        let compute = Math.floor(Math.random()* array.length)
        let computer = array[compute]
        let Ties = 0
        let Wins = 0
        let Losses = 0

        if(computer==='rock'){
            document.querySelector('.computer1').innerText = "✊"
        }
        else if(computer==='paper'){
            document.querySelector('.computer1').innerText = "🖐️"
        }

        else{
            document.querySelector('.computer1').innerText = "✌️"
        }

        if(human==='rock' && computer==='rock'){
            Ties = Ties + 1
            document.querySelector('#ties').innerText = Ties
            document.querySelector('#result').innerText = "It's a Tie"

        }
        else if(human==='rock' && computer==='paper'){
            Losses = Losses + 1
            document.querySelector('#losses').innerText = Losses
            document.querySelector('#result').innerText = "Computer Won! Hell Naw"

        }

        else if(human==='rock' && computer==='scissor'){
            Wins = Wins + 1
            document.querySelector('#wins').innerText = Wins
            document.querySelector('#result').innerText = "You Won"

        }

        else if(human==='paper' && computer==='paper'){
            Ties = Ties + 1
            document.querySelector('#ties').innerText = Ties
            document.querySelector('#result').innerText = "It's a Tie"

        }

        else if(human==='paper' && computer==='scissor'){
            Losses = Losses + 1
            document.querySelector('#losses').innerText = Losses
            document.querySelector('#result').innerText = "Computer Won! Hell Naw"

        }

        else if(human==='paper' && computer==='rock'){
            Wins = Wins + 1
            document.querySelector('#wins').innerText = Wins
            document.querySelector('#result').innerText = "You Won"

        }

        else if(human==='scissor' && computer==='scissor'){
            Ties = Ties + 1
            document.querySelector('#ties').innerText = Ties
            document.querySelector('#result').innerText = "It's a Tie"

        }

        else if(human==='scissor' && computer==='paper'){
            Wins = Wins + 1
            document.querySelector('#wins').innerText = Wins
            document.querySelector('#result').innerText = "You Won"

        }

        else if(human==='scissor' && computer==='rock'){
            Losses = Losses + 1
            document.querySelector('#losses').innerText = Losses
            document.querySelector('#result').innerText = "Computer Won! Hell Naw"

        }
    }
    function playRock(){
        human = 'rock'
        document.querySelector('.you1').innerText = "✊"
        check()

    }

    function playPaper(){
        human = 'paper'
        document.querySelector('.you1').innerText = "🖐️"
        check()

    }

    function playScissor(){
        human = 'rock'
        document.querySelector('.you1').innerText = "✌️"
        check()

    }