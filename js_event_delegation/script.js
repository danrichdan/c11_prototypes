// Answer the questions here:
$( document ).ready(function() {
    $( "#list button" ).on('click', function() {
        console.log($(this).text());
    })

//"<li><button style='margin-top: 10px'>Delegated Button#5 Handler</button></li>"
//new Button
    //FEATURE 2
var button = $('<button>', {
    style: 'margin-top: 10px',
    text: 'Delegated Button#5 Handler'
});

var li = $('<li>');
li.append(button);
li.appendTo('#list');


    //Additional Challenge, fail
    var a = $('<a>', {
        target: '_blank',
        href: 'http://www.google.com'
    });

var button2 = $('<button>', {
    style: 'margin-top: 15px',
    text: 'Click to get to Google... or not',
});

    var li2 = $('<li>');
    a.appendTo(button2);
    li2.append(button2);
    li2.appendTo('#list');


// - What do you think is going to happen?
//I think the entire text node will be logged to the console

// - What happened?
//The button's text node was not logged to the console

// - Why?
//This happened because the event was set on the object that was performing the event

//========== Write your code below ===========//

//FEATURE 3
$('#list').on('click', 'button', function() {
    console.log('This is the second click handler', $(this).text());
});

    //additional challenge -- fail
   /* $('#list a[href]').on('click', 'button', function() {
        console.log('This is the new google button', $(this).text());
    });*/

});