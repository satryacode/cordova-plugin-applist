# cordova plugin applist

**Applist** is a cordova plugin to give the list of all installed apps **WITHOUT** their icons.

Fork of https://github.com/jmrezayi2/Applist

## Supported Platforms

- Android 6.0 and Android 7.0 (*haven't tested below Android 6.0)

## Installation

Cordova:

    cordova plugin add https://github.com/satryacode/cordova-plugin-applist.git

## Usage:

```javascript
Applist.getApps(
    function(app_list) {
        //successCallback
        alert(JSON.stringify((app_list)));
    },
    function(err) {
        //errorCallback
        alert("Error! " + err);
    }
);
```

## Detailed usage: 

Gives the list of all apps installed on the phone in a JSON object and also saves an icon of each of them in app data dir ;        

JSONObject info:
* app_list.info.id = app id (package name)
* app_list.info.name = is app name 

## TO-DO:

**Add iOS support**

