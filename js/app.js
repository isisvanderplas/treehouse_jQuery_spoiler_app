// Create the 'reveal spoiler' button
const $button = $('<button>Reveal spoiler</button>');
// Append to webpage
$('.spoiler').append($button);


// hide the spoiler text
$('.spoiler span').hide();
// when the button is pressed:
$('.spoiler').on('click', 'button', function(event)  {
  // show the spoiler text
  $(this).prev().show();
  // hide the 'reveal spoiler' button
  $(this).hide()
})
