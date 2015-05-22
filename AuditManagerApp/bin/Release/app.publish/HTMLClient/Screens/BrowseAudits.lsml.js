/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAudits.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAudits"]) {
        screen.findContentItem("AddAudit").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAudit").isEnabled = false;
    }
};