getPeopleCount = function () {
  return People.find({}).count();
}

getPersonId = function () {
  return Meteor.userId();
}

getPerson = function () {
  return People.findOne({_personId: getPersonId()});
}

getFormMode = function () {
  var count, dataSet;
  count = getPeopleCount();
  dataSet = getPerson();

  if (count === 0)
    return {doc: null, type: "insert"};
  else
    return {doc: dataSet, type: "update"};
}

getAutoformValue = function (fieldName, formId) {
  return AutoForm.getFieldValue(formId, fieldName);
}

isOtherNameChecked = function (fieldName, formId) {
  var radio = getAutoformValue(fieldName, formId);
  // if (returnValue === undefined || returnValue === null)
  //   return;
  if (radio === "No" || radio === undefined || radio === null)
    return false;
  else
    return true;
}

getCheckBoxState = function (fieldName, formId) {
  var checkBox = getAutoformValue(formId, fieldName);
  if (checkBox === false || checkBox === undefined || checkBox === null)
    return false;
  else if (checkBox === true)
    return true;
}
