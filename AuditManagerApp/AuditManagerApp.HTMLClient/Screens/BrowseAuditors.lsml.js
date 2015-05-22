/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseAuditors.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditAuditors"]) {
        screen.findContentItem("AddAuditor").isEnabled = true;
    }
    else {
        screen.findContentItem("AddAuditor").isEnabled = false;
    }
};