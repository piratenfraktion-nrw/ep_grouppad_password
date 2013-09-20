'use strict';

var eejs = require('ep_etherpad-lite/node/eejs');

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
