const arrayOfQuotes = [
    {'quote': '“Be yourself; everyone else is already taken.”', 
     'author': 'Oscar Wilde'
    },
    {'quote': "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", 
        'author': 'Dr. Seuss'
       },
       {'quote': '“You only live once, but if you do it right, once is enough.”', 
        'author': 'Mae West'
       },
       {'quote': '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”', 
        'author': 'Martin Luther King '
       },
       {'quote': '“Without music, life would be a mistake.”', 
        'author': 'Friedrich Nietzsche, Twilight of the Idols'
       },
       {'quote': '“Twenty years from now you will be more disappointed by the things that you didnot do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”', 
        'author': 'H. Jackson Brown'
       },
       {'quote': "“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”", 
        'author': 'Marilyn Monroe'
       },
    
];

let lastIndex = -1; 

function displayQuote() {
    let random;
    do {
        random = Math.floor(Math.random() * arrayOfQuotes.length);
    } while (random === lastIndex);
    lastIndex = random;
    const selectedQuote = arrayOfQuotes[random];
    document.querySelector('#quoteOutput').textContent = selectedQuote.quote;
    document.querySelector('#authorOutput').textContent = `--${selectedQuote.author}`;
}
