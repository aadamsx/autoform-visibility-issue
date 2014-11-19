Template.registerHelper("checkBoxCheck", function (fieldName, formId) {
  return getCheckBoxState(fieldName, formId);
});

Template.registerHelper("checkOtherName", function (fieldName) {
  return isOtherNameChecked(fieldName, "home");
});
