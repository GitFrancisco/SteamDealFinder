// get the exact data object from the clicked row
var rowData = oEvent.oSource.getBindingContext().getObject();

// create a JSON model containing this row's data
var detailModel = new sap.ui.model.json.JSONModel(rowData);

// attach the model to the detail page
DetailPage.setModel(detailModel, "DealDetail");

// Clear past MT Rating:
Label_MetacriticRating.removeStyleClass("metaGreen metaYellow metaRed");

// Metacritic Rating:
var mtScore = parseFloat(rowData.metacriticScore);

if (mtScore === 0){
    Label_MetacriticRating.setVisible(false);
    MetacriticIcon.setVisible(false);
}

if (mtScore >= 75) {
    Label_MetacriticRating.addStyleClass("metaGreen");
} else if (mtScore >= 50) {
    Label_MetacriticRating.addStyleClass("metaYellow");
} else {
    Label_MetacriticRating.addStyleClass("metaRed");
}

// Clear past Steam RW:
Label_SteamRating.removeStyleClass("steamOverwhelminglyPositive steamVeryPositive steamPositive steamMostlyPositive steamMixed steamMostlyNegative steamNegative steamVeryNegative steamOverwhelminglyNegative");

// Steam Reviews:
var steamReviewText = rowData.steamRatingText;

if (steamReviewText === "Overwhelmingly Positive") {
    Label_SteamRating.addStyleClass("steamOverwhelminglyPositive");
} else if (steamReviewText === "Very Positive") {
    Label_SteamRating.addStyleClass("steamVeryPositive");
} else if (steamReviewText === "Positive") {
    Label_SteamRating.addStyleClass("steamPositive");
} else if (steamReviewText === "Mostly Positive") {
    Label_SteamRating.addStyleClass("steamMostlyPositive");
} else if (steamReviewText === "Mixed") {
    Label_SteamRating.addStyleClass("steamMixed");
} else if (steamReviewText === "Mostly Negative") {
    Label_SteamRating.addStyleClass("steamMostlyNegative");
} else if (steamReviewText === "Negative") {
    Label_SteamRating.addStyleClass("steamNegative");
} else if (steamReviewText === "Very Negative") {
    Label_SteamRating.addStyleClass("steamVeryNegative");
} else if (steamReviewText === "Overwhelmingly Negative") {
    Label_SteamRating.addStyleClass("steamOverwhelminglyNegative");
}

// Deal Rating:
var dealRating = parseFloat(rowData.dealRating);

if (dealRating < 5.0){
    Label_IsItWorth.setText("Not worth buying/Wait for a better deal...");
} else if (dealRating < 7.0){
    Label_IsItWorth.setText("Decent deal.");
} else {
    Label_IsItWorth.setText("Buy it now! Outstanding deal!");
}

// navigate to DetailPage
App.to(DetailPage);