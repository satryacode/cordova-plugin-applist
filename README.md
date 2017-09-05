#A plugin to give the list of all installed apps **WITHOUT** their icons

Fork of https://github.com/jmrezayi2/Applist

##Usage:
        
        var success = function(app_list) { 
                alert(JSON.stringify((app_list)); 
        };
        var error = function(err) { 
                alert("Error: " + err); 
        };
        Applist.getApps(success, error) // get installed apps
        
        OR
        
        Applist.getAllApps(success, error) // get all apps (including system apps)
        
##Detailed usage:        
Gives the list of all apps installed on the phone in a JSON object and also saves an icon of each of them in app data dir ;        

JSONObject info:
* app_list.info.id = app id (package name)
* app_list.info.name = is app name 


##To Do:

**Add iOS support**

