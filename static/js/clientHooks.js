exports.postToolbarInit = function(hook_name, context, callback) {
    var $btn = $('#epTestButton');

    $btn.click(function() {
        var btn = $('#epTestButton');
        btn.prop('disabled', true);

        var pad_id = 'test_pad';

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1/collab-edit/public/api/fake/save/' + pad_id, true);

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
