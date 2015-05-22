/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAuditStatuses.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAuditStatuses"]) {
        screen.findContentItem("AddAuditStatus").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAuditStatus").isEnabled = false;
    }
};