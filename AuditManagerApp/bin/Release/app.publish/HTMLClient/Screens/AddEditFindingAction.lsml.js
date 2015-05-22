/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditFindingAction.created = function (screen) {
    // Write code here.
    if (myapp.permissions["LightSwitchApplication:CanEditFindingActions"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
    }
};