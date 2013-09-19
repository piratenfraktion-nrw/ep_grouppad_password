function sendSetPasswordRequest(password){
  var myAuthorId = pad.getUserId();
  var padId = pad.getPadId();
  // Send chat message to send to the server
  var message = {
    type : 'ep_grouppad_password',
    action : 'setGrouppadPassword',
    padId : padId,
    password: password
  };
  pad.collabClient.sendMessage(message);
}

$(function() {
  $('#set_password_button').click(function() {
    sendSetPasswordRequest($('#grouppad_password input#pad_password').val());
  });
});
