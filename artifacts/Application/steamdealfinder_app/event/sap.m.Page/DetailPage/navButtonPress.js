App.back()
// Reset Metacritic Label and Icon
Label_MetacriticRating.setVisible(true);
MetacriticIcon.setVisible(true);
Label_MetacriticRating.removeStyleClass("metaGreen metaYellow metaRed");
// Wipe old state
Label_SteamRating.removeStyleClass("steamOverwhelminglyPositive steamVeryPositive steamPositive steamMostlyPositive steamMixed steamMostlyNegative steamNegative steamVeryNegative steamOverwhelminglyNegative");