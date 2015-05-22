/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAuditor.created = function (screen) {
    var lastname;
    var firstname;

    if (screen.Auditor.Employee !== undefined) {
        lastname = screen.Auditor.Employee.LastName;
        firstname = screen.Auditor.Employee.FirstName;
        screen.details.displayName = "Auditor: " + firstname + " " + lastname;
    }
    else {
        screen.details.displayName = "Add new Auditor";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditAuditors"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("AuditsUndertakenTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("AuditsUndertakenTab").isReadOnly = true;
    }
};