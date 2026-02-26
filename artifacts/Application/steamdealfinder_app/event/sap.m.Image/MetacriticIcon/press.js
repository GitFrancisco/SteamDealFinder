// get the model attached to DetailPage
var DetailPageModel = DetailPage.getModel("DealDetail");

// get the metacriticLink property from the model
var metacriticPage = DetailPageModel.getProperty("/metacriticLink");

// verify if the page exists and is valid
if (metacriticPage && metacriticPage !== "") {
    // build the Metacritic URL
    var url = "https://www.metacritic.com" + metacriticPage;
    window.open(url, "_blank");
} else {
    // show a toast message if there's no page
    sap.m.MessageToast.show("Metacritic page not available for this product. Try searching manually.");
}