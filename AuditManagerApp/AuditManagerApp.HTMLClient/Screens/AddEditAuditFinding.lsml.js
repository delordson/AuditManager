/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditAuditFinding.created = function (screen) {
    var reference;
    var description;

    if (screen.AuditFinding.FindingReference !== undefined) {
        reference = screen.AuditFinding.FindingReference;
        description = screen.AuditFinding.FindingDescription;
        screen.details.displayName = "Audit Finding " + reference + ": " + description;;
    }
    else {
        screen.details.displayName = "Add new Audit Finding for Audit: " + screen.AuditFinding.Audit.AuditCode;
    }

    if (myapp.permissions["LightSwitchApplication:CanEditAuditFindings"]) {
        screen.findContentItem("DetailsTab").isReadOnly = false;
        screen.findContentItem("ImpactAssessmentTab").isReadOnly = false;
        screen.findContentItem("ImmediateActionTab").isReadOnly = false;
        screen.findContentItem("FurtherActionsTab").isReadOnly = false;
        screen.findContentItem("CAPATab").isReadOnly = false;
        screen.findContentItem("NotesTab").isReadOnly = false;
    }
    else {
        screen.findContentItem("DetailsTab").isReadOnly = true;
        screen.findContentItem("ImpactAssessmentTab").isReadOnly = true;
        screen.findContentItem("ImmediateActionTab").isReadOnly = true;
        screen.findContentItem("FurtherActionsTab").isReadOnly = true;
        screen.findContentItem("CAPATab").isReadOnly = true;
        screen.findContentItem("NotesTab").isReadOnly = true;
    }
};