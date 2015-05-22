/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAuditTypes.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAuditTypes"]) {
        screen.findContentItem("AddAuditType").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAuditType").isEnabled = false;
    }
};