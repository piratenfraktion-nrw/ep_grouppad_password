'use strict';

var eejs = require('ep_etherpad-lite/node/eejs');

exports.handleMessage = function(hook_name, context, callback){
  var Pad = require('ep_etherpad-lite/node/db/Pad.js').Pad;

  // Firstly ignore any request that aren't about chat
  var isSetPasswordRequest = false;
  if(context) {
    if(context.message && context.message){
      if(context.message.type === 'COLLABROOM'){
        console.log('COLLABROM REQ');
        if(context.message.data){
          if(context.message.data.type){
            console.log('COLLABROM REQ TYPE');
            if(context.message.data.type === 'ep_grouppadpassword'){
              console.log('COLLABROM SET PASS REQ');
              isSetPasswordRequest = true;
            }
          }
        }
      }
    }
  }
  if(!isSetPasswordRequest){
    callback(false);
    return false;
  }

  console.log('SET PASSWORD REQUEST!');

  var packet = context.message.data;
  /***
    What's available in a packet?
    * action -- The action IE chatPosition
    * padId -- The padId of the pad both authors are on
    ***/
  if(packet.action === 'setGrouppadPassword'){
    var pad = new Pad(packet.padId);
    pad.setPassword(packet.password);
  }
};

exports.eejsBlock_embedPopup = function(hook_name, args, cb) {
  args.content = args.content + eejs.require('ep_grouppad_password/templates/embedPopup.html', {}, module);
  return cb();
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = args.content + eejs.require('ep_grouppad_password/templates/scripts.html', {}, module);
  return cb();
};

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + eejs.require('ep_grouppad_password/templates/styles.html', {}, module);
  return cb();
};
