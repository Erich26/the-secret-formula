//Needed for all forms
const form = document.querySelector('form');
const inputText = document.querySelector('#input-text');


//Takes input text and displays as browser alert
form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Input:', inputText.value);

    alert(inputText.value);
});

//Set variables for each checkbox
const inputText2 = document.querySelector('#input-text2')
const wholeWheat = document.querySelector('#whole-wheat')
const white = document.querySelector('#white')
const pretzel = document.querySelector('#pretzel')
const ciabatta = document.querySelector('#ciabatta')
const lettuce = document.querySelector('#lettuce')
const tomato = document.querySelector('#tomato')
const onion = document.querySelector('#onion')
const pickles = document.querySelector('#pickles')
const cheddarCheese = document.querySelector('#cheddar-cheese')
const provoloneCheese = document.querySelector('#provolone-cheese')

//Takes input to create sandwich
form.addEventListener('submit', function(event) {
     event.preventDefault();

     let str = 
        'Your ' +
        inputText2.value +
        ' ' +
        'sandwich, will be prepared with: ';

        if(wholeWheat.checked) {
            str += 'whole wheat bread, ';
        }
        if(white.checked) {
            str += 'white bread, ';
        }
        if(pretzel.checked) {
            str += 'pretzel bun, ';
        }
        if(ciabatta.checked) {
            str += 'ciabatta bun, ';
        }
        if(lettuce.checked) {
            str += 'lettuce, ';
        }
        if(tomato.checked) {
            str += 'tomato, ';
        }
        if(onion.checked) {
            str += 'onion, ';
        }
        if(pickles.checked) {
            str += 'pickles, ';
        }
        if(cheddarCheese.checked) {
            str += 'cheddar cheese, ';
        }
        if(provoloneCheese.checked) {
            str += 'provolone cheese, ';
        }

        alert(str);
        
    });

    //Haircut Scheduling

    const inputDateTime = document.querySelector('#input-datetime');
    const stylist = document.querySelector('#input-stylist');
    const inputLong = document.querySelector('#radio-long');
    const inputShort = document.querySelector('#radio-short');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let str = 
        'Your appt is scheduled for ' +
        inputDateTime.value +
        ' with, ' +
        stylist.value +
        ' for ';

        if(inputLong.checked) {
            str += 'long hair.';
        }
        if(inputShort.checked) {
            str += 'short hair.';
        }

        alert(str);
    });

    //Create account
