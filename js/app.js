// hide the spoiler text
$('.spoiler span').hide();
// when the button is pressed:
$('.spoiler button').click(() => {
  $('.spoiler span').show();
  $('.spoiler button').hide()
})
  // show the spoiler text
  // hide the 'reveal spoiler' button
