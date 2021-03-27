exports.padInitToolbar = function(hook_name, context, callback) {
    var toolbar = context.toolbar

    /*
    var button = toolbar.button({
        command: 'epTestButton',
        class: "buttonicon buttonicon-file-alt epTestButton"
    });
    toolbar.registerButton('epTestButton', button);
    */

    return callback();
};

var eejs = require('ep_etherpad-lite/node/eejs/index');
exports.eejsBlock_editbarMenuRight = function(hook_name, context, callback) {
    context.content = eejs.require('ep_etherpad_remote_plugin/templates/button.ejs') + context.content;
    return callback();
};
