#A plugin to give the list of all installed apps with their icons

Fork of https://github.com/jmrezayi2/Applist

##Usage:
        
        var success = function(app_list) { alert(JSON.stringify((app_list)); };
        var error = function(err) { alert("Oopsie! " + err); };
        Applist.createEvent(success, error)
        
##Detailed usage:        
Gives the list of all apps installed on the phone in a JSON object and also saves an icon of each of them in app data dir ;        

JSONObject info:
* app_list.info.id is app id (package name)
* app_list.info.name is app name 
* app_list.info.img is app-logo cache app cache dir


##To Do:

**Add iOS support**

