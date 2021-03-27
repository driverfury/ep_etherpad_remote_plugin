exports.postToolbarInit = function(hook_name, context, callback) {
    var etherpad_remote_url = 'http://127.0.0.1/etherpad-remote/public';

    var $btn = $('#epRemoteSaveButton');

    $btn.click(function() {
        var btn = $('#epRemoteSaveButton');
        btn.prop('disabled', true);

        var pad_id = document.location.pathname.substring(document.location.pathname.lastIndexOf('/') + 1);
        pad_id = decodeURIComponent(pad_id);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', etherpad_remote_url + '/api/save/' + pad_id, true);

        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                var statusSuccess = false;
                if (this.status === 200) {
                    var response = JSON.parse(this.responseText);
                    statusSuccess = (response.hasOwnProperty('status') && response.status == 'success');
                }

                if (statusSuccess) {
                    window.alert("File successfully saved!");
                } else {
                    window.alert("Error while saving the file!");
                }

                btn.prop('disabled', false);
            }
        }

        xhr.send();
    });

    return callback();
};
