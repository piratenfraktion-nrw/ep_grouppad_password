function sendSetPasswordRequest(password){
  var message = JSON.stringify({
    password: password
  });
  $.ajax('/api/pad/'+location.pathname.split('/')[2]+'/password', {
    data: message,
    contentType: 'application/json',
    type: 'POST'
  }).success(function(data) {
      $('#set_password_button').text('Password Saved');
      $('#grouppad_password input#pad_password').val('');
  });
}

$(function() {
  $('#set_password_button').click(function() {
    sendSetPasswordRequest($('#grouppad_password input#pad_password').val());
  });
});
