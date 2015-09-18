var Applist = {
    getApps: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Applist', 
            'getApps', 
            []
        ); 
    },
    getAllApps: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Applist', 
            'getAllApps', 
            []
        ); 
    }
}
module.exports = Applist;