// if min price is greater than max price, alert the user
if (StepInput_MinPrice > StepInput_MaxPrice && StepInput_MaxPrice > 0){
  sap.m.MessageToast.show("The minimum price can't be greater than the maximum price.");
  return;  
};

// if the max price is 0, it will consider unlimited max price

// search options on request
var options = {
  parameters: {
    pageSize: 60, 
    lowerPrice: StepInput_MinPrice.getValue(),
    storeID: 1, // Steam only
    upperPrice: StepInput_MaxPrice.getValue(), 
    title: Input_GameTitle.getValue(), 
    AAA: CheckBox_AAA.getSelected()? 1 : "", 
  },
};

apiendpointDeals(options);
