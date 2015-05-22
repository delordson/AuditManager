/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAudit.created = function (screen) {
    var reference;
    var description;

    if (screen.Audit.AuditCode !== undefined) {
        reference = screen.Audit.AuditCode;
        description = screen.Audit.AuditDescription;
        screen.details.displayName = "Audit " + reference + ": " + description;
    }
    else {
        screen.details.displayName = "Add new Audit";
    }

    if (myapp.permissions["LightSwitchApplication:CanEditAudits"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("AuditorsTab").isReadOnly = false;
        screen.findContentItem("AuditFindingsTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("AuditorsTab").isReadOnly = true;
        screen.findContentItem("AuditFindingsTab").isReadOnly = true;
    }
};