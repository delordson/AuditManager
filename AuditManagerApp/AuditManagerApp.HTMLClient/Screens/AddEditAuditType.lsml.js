/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAuditType.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAuditTypes"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};