#A plugin to give the list of all installed apps **WITHOUT** their icons

Fork of https://github.com/jmrezayi2/Applist

##Usage:
        
        Applist.getApps(
            function(app_list) {
                //successCallback
                alert(JSON.stringify((app_list));
            },
            function(err) {
                //errorCallback
                alert("Error! " + err);
            }
        ) // get installed apps
        
        OR
        
        Applist.getAllApps(function(success){}, function(error){}) // get all apps (including system apps)
        
##Detailed usage:        
Gives the list of all apps installed on the phone in a JSON object and also saves an icon of each of them in app data dir ;        

JSONObject info:
* app_list.info.id = app id (package name)
* app_list.info.name = is app name 


##To Do:

**Add iOS support**

