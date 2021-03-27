# Etherpad remote plugin for Etherpad Lite
This plugins adds a "SAVE" button to etherpad toolbar as shown below:

![Screenshot](https://github.com/driverfury/ep_etherpad_remote_plugin/blob/main/screenshots/plugin.png?raw=true)

When you click on "SAVE" a POST request will be sent to ```api/save/{pad_id}``` endpoint of [etherpad remote](https://github.com/driverfury/etherpad-remote) hosted on URL that you set (see configuration guide below).

## Configuration
Configuration is pretty straightforward, you only need to set the URL on which [etherpad remote](https://github.com/driverfury/etherpad-remote) is hosted inside the ```static/js/clientHooks.js``` file:
```javascript
[...]
        var etherpad_remote_url = 'http://<etherpad_remote_url>';
[...]
```
