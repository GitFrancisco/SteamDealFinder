// get the model attached to DetailPage
var DetailPageModel = DetailPage.getModel("DealDetail");

// get the SteamAppID property from the model
var steamAppID = DetailPageModel.getProperty("/steamAppID");

// verify if the ID exists and is valid
if (steamAppID && steamAppID !== "0") {
    // build the Steam store URL
    var steamUrl = "https://store.steampowered.com/app/" + steamAppID;
    
    // open the URL in a new browser tab
    window.open(steamUrl, "_blank");
} else {
    // show a toast message if there's no page
    sap.m.MessageToast.show("Steam page not available for this product. Try searching manually.");
}