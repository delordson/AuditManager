/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAuditAuditor.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAuditAuditors"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};