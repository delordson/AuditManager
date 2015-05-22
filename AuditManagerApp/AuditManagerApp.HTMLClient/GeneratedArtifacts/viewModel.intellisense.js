/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditAudit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAudit
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AddEditAudit,
            value: lightSwitchApplication.AddEditAudit
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AddEditAudit,
            value: lightSwitchApplication.Audit
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Audit,
            value: lightSwitchApplication.Audit
        },
        AuditType: {
            _$class: msls.ContentItem,
            _$name: "AuditType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Audit,
            value: lightSwitchApplication.AuditType
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AuditType",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditType,
            value: lightSwitchApplication.AuditType
        },
        AuditCode: {
            _$class: msls.ContentItem,
            _$name: "AuditCode",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Audit,
            value: String
        },
        AuditDescription: {
            _$class: msls.ContentItem,
            _$name: "AuditDescription",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Audit,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Audit,
            value: lightSwitchApplication.Audit
        },
        SchduledDate: {
            _$class: msls.ContentItem,
            _$name: "SchduledDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Audit,
            value: Date
        },
        AuditStatus: {
            _$class: msls.ContentItem,
            _$name: "AuditStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Audit,
            value: lightSwitchApplication.AuditStatus
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "AuditStatus",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditStatus,
            value: lightSwitchApplication.AuditStatus
        },
        DateStarted: {
            _$class: msls.ContentItem,
            _$name: "DateStarted",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Audit,
            value: Date
        },
        DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateCompleted",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Audit,
            value: Date
        },
        AuditorsTab: {
            _$class: msls.ContentItem,
            _$name: "AuditorsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AddEditAudit,
            value: lightSwitchApplication.AddEditAudit
        },
        AuditAuditors: {
            _$class: msls.ContentItem,
            _$name: "AuditAuditors",
            _$parentName: "AuditorsTab",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AddEditAudit,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditAudit,
                _$entry: {
                    elementType: lightSwitchApplication.AuditAuditor
                }
            }
        },
        AuditAuditorsTemplate: {
            _$class: msls.ContentItem,
            _$name: "AuditAuditorsTemplate",
            _$parentName: "AuditAuditors",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditAuditor,
            value: lightSwitchApplication.AuditAuditor
        },
        Auditor_Employee_FirstName: {
            _$class: msls.ContentItem,
            _$name: "Auditor_Employee_FirstName",
            _$parentName: "AuditAuditorsTemplate",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditAuditor,
            value: String
        },
        Auditor_Employee_LastName: {
            _$class: msls.ContentItem,
            _$name: "Auditor_Employee_LastName",
            _$parentName: "AuditAuditorsTemplate",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditAuditor,
            value: String
        },
        AuditFindingsTab: {
            _$class: msls.ContentItem,
            _$name: "AuditFindingsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AddEditAudit,
            value: lightSwitchApplication.AddEditAudit
        },
        AuditFindings1: {
            _$class: msls.ContentItem,
            _$name: "AuditFindings1",
            _$parentName: "AuditFindingsTab",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AddEditAudit,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditAudit,
                _$entry: {
                    elementType: lightSwitchApplication.AuditFinding
                }
            }
        },
        AuditFindings1Template: {
            _$class: msls.ContentItem,
            _$name: "AuditFindings1Template",
            _$parentName: "AuditFindings1",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditFinding,
            value: lightSwitchApplication.AuditFinding
        },
        FindingReference: {
            _$class: msls.ContentItem,
            _$name: "FindingReference",
            _$parentName: "AuditFindings1Template",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditFinding,
            value: String
        },
        FindingDescription: {
            _$class: msls.ContentItem,
            _$name: "FindingDescription",
            _$parentName: "AuditFindings1Template",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditFinding,
            value: String
        },
        FindingDate: {
            _$class: msls.ContentItem,
            _$name: "FindingDate",
            _$parentName: "AuditFindings1Template",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        TargetResolutionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetResolutionDate",
            _$parentName: "AuditFindings1Template",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        DateFindingClosed: {
            _$class: msls.ContentItem,
            _$name: "DateFindingClosed",
            _$parentName: "AuditFindings1Template",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "AuditFindings1Template",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.AuditFinding,
            value: lightSwitchApplication.Employee
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditAudit,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAudit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAudit, {
        /// <field>
        /// Called when a new AddEditAudit screen is created.
        /// <br/>created(msls.application.AddEditAudit screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAudit],
        /// <field>
        /// Called before changes on an active AddEditAudit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAudit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAudit],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("left"); }],
        /// <field>
        /// Called after the AuditType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditType_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the AuditCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditCode"); }],
        /// <field>
        /// Called after the AuditDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditDescription"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("right"); }],
        /// <field>
        /// Called after the SchduledDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SchduledDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("SchduledDate"); }],
        /// <field>
        /// Called after the AuditStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditStatus"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the DateStarted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateStarted_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("DateStarted"); }],
        /// <field>
        /// Called after the DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("DateCompleted"); }],
        /// <field>
        /// Called after the AuditorsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditorsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditorsTab"); }],
        /// <field>
        /// Called after the AuditAuditors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditAuditors_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditAuditors"); }],
        /// <field>
        /// Called after the AuditAuditorsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditAuditorsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditAuditorsTemplate"); }],
        /// <field>
        /// Called after the Auditor_Employee_FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Auditor_Employee_FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("Auditor_Employee_FirstName"); }],
        /// <field>
        /// Called after the Auditor_Employee_LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Auditor_Employee_LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("Auditor_Employee_LastName"); }],
        /// <field>
        /// Called after the AuditFindingsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditFindingsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditFindingsTab"); }],
        /// <field>
        /// Called after the AuditFindings1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditFindings1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditFindings1"); }],
        /// <field>
        /// Called after the AuditFindings1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditFindings1Template_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AuditFindings1Template"); }],
        /// <field>
        /// Called after the FindingReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("FindingReference"); }],
        /// <field>
        /// Called after the FindingDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("FindingDescription"); }],
        /// <field>
        /// Called after the FindingDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("FindingDate"); }],
        /// <field>
        /// Called after the TargetResolutionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetResolutionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("TargetResolutionDate"); }],
        /// <field>
        /// Called after the DateFindingClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateFindingClosed_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("DateFindingClosed"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAudit().findContentItem("LastName"); }]
    });

    lightSwitchApplication.AddEditAuditAuditor.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditAuditor
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditAuditor,
            data: lightSwitchApplication.AddEditAuditAuditor,
            value: lightSwitchApplication.AddEditAuditAuditor
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAuditAuditor,
            data: lightSwitchApplication.AddEditAuditAuditor,
            value: lightSwitchApplication.AuditAuditor
        },
        Auditor: {
            _$class: msls.ContentItem,
            _$name: "Auditor",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditAuditor,
            data: lightSwitchApplication.AuditAuditor,
            value: lightSwitchApplication.Auditor
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Auditor",
            screen: lightSwitchApplication.AddEditAuditAuditor,
            data: lightSwitchApplication.Auditor,
            value: lightSwitchApplication.Auditor
        },
        Employee_FirstName: {
            _$class: msls.ContentItem,
            _$name: "Employee_FirstName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditAuditAuditor,
            data: lightSwitchApplication.Auditor,
            value: String
        },
        Employee_LastName: {
            _$class: msls.ContentItem,
            _$name: "Employee_LastName",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddEditAuditAuditor,
            data: lightSwitchApplication.Auditor,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditAuditor
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAuditAuditor, {
        /// <field>
        /// Called when a new AddEditAuditAuditor screen is created.
        /// <br/>created(msls.application.AddEditAuditAuditor screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAuditAuditor],
        /// <field>
        /// Called before changes on an active AddEditAuditAuditor screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAuditAuditor screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAuditAuditor],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditAuditor().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditAuditor().findContentItem("columns"); }],
        /// <field>
        /// Called after the Auditor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Auditor_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditAuditor().findContentItem("Auditor"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditAuditor().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Employee_FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditAuditor().findContentItem("Employee_FirstName"); }],
        /// <field>
        /// Called after the Employee_LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditAuditor().findContentItem("Employee_LastName"); }]
    });

    lightSwitchApplication.AddEditAuditFinding.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditFinding
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AuditFinding
        },
        FindingReference: {
            _$class: msls.ContentItem,
            _$name: "FindingReference",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AuditFinding,
            value: String
        },
        FindingDescription: {
            _$class: msls.ContentItem,
            _$name: "FindingDescription",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AuditFinding,
            value: String
        },
        FindingDate: {
            _$class: msls.ContentItem,
            _$name: "FindingDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AuditFinding,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName1: {
            _$class: msls.ContentItem,
            _$name: "LastName1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName1: {
            _$class: msls.ContentItem,
            _$name: "FirstName1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.Employee,
            value: String
        },
        TargetResolutionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetResolutionDate",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        DateFindingClosed: {
            _$class: msls.ContentItem,
            _$name: "DateFindingClosed",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        ImpactAssessmentTab: {
            _$class: msls.ContentItem,
            _$name: "ImpactAssessmentTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "ImpactAssessmentTab",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        IssueImpactAssessment: {
            _$class: msls.ContentItem,
            _$name: "IssueImpactAssessment",
            _$parentName: "Group1",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: String
        },
        ImmediateActionTab: {
            _$class: msls.ContentItem,
            _$name: "ImmediateActionTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "ImmediateActionTab",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        ImmediateAction: {
            _$class: msls.ContentItem,
            _$name: "ImmediateAction",
            _$parentName: "Group2",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: String
        },
        FurtherActionsTab: {
            _$class: msls.ContentItem,
            _$name: "FurtherActionsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        FindingAction: {
            _$class: msls.ContentItem,
            _$name: "FindingAction",
            _$parentName: "FurtherActionsTab",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditAuditFinding,
                _$entry: {
                    elementType: lightSwitchApplication.FindingAction
                }
            }
        },
        FindingActionTemplate: {
            _$class: msls.ContentItem,
            _$name: "FindingActionTemplate",
            _$parentName: "FindingAction",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.FindingAction,
            value: lightSwitchApplication.FindingAction
        },
        AssignedTo1: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo1",
            _$parentName: "FindingActionTemplate",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.FindingAction,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "AssignedTo1",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "AssignedTo1",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Action: {
            _$class: msls.ContentItem,
            _$name: "Action",
            _$parentName: "FindingActionTemplate",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.FindingAction,
            value: String
        },
        DateActionAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateActionAssigned",
            _$parentName: "FindingActionTemplate",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.FindingAction,
            value: Date
        },
        ActionTargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "ActionTargetCompletionDate",
            _$parentName: "FindingActionTemplate",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.FindingAction,
            value: Date
        },
        DateActionCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateActionCompleted",
            _$parentName: "FindingActionTemplate",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.FindingAction,
            value: Date
        },
        CAPATab: {
            _$class: msls.ContentItem,
            _$name: "CAPATab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "CAPATab",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        CorrectiveAndPreventativeAction: {
            _$class: msls.ContentItem,
            _$name: "CorrectiveAndPreventativeAction",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: String
        },
        CorrectiveAndPreventativeActionTargetDate: {
            _$class: msls.ContentItem,
            _$name: "CorrectiveAndPreventativeActionTargetDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: Date
        },
        DateCorrectiveAndPreventativeActionClosed: {
            _$class: msls.ContentItem,
            _$name: "DateCorrectiveAndPreventativeActionClosed",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: Date
        },
        NotesTab: {
            _$class: msls.ContentItem,
            _$name: "NotesTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "NotesTab",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: lightSwitchApplication.AddEditAuditFinding
        },
        Notes: {
            _$class: msls.ContentItem,
            _$name: "Notes",
            _$parentName: "Group3",
            screen: lightSwitchApplication.AddEditAuditFinding,
            data: lightSwitchApplication.AddEditAuditFinding,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditFinding
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAuditFinding, {
        /// <field>
        /// Called when a new AddEditAuditFinding screen is created.
        /// <br/>created(msls.application.AddEditAuditFinding screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAuditFinding],
        /// <field>
        /// Called before changes on an active AddEditAuditFinding screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAuditFinding screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAuditFinding],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("columns"); }],
        /// <field>
        /// Called after the FindingReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingReference_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("FindingReference"); }],
        /// <field>
        /// Called after the FindingDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("FindingDescription"); }],
        /// <field>
        /// Called after the FindingDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("FindingDate"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("LastName1"); }],
        /// <field>
        /// Called after the FirstName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("FirstName1"); }],
        /// <field>
        /// Called after the TargetResolutionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetResolutionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("TargetResolutionDate"); }],
        /// <field>
        /// Called after the DateFindingClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateFindingClosed_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("DateFindingClosed"); }],
        /// <field>
        /// Called after the ImpactAssessmentTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImpactAssessmentTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("ImpactAssessmentTab"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("Group1"); }],
        /// <field>
        /// Called after the IssueImpactAssessment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IssueImpactAssessment_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("IssueImpactAssessment"); }],
        /// <field>
        /// Called after the ImmediateActionTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImmediateActionTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("ImmediateActionTab"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("Group2"); }],
        /// <field>
        /// Called after the ImmediateAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImmediateAction_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("ImmediateAction"); }],
        /// <field>
        /// Called after the FurtherActionsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FurtherActionsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("FurtherActionsTab"); }],
        /// <field>
        /// Called after the FindingAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingAction_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("FindingAction"); }],
        /// <field>
        /// Called after the FindingActionTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingActionTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("FindingActionTemplate"); }],
        /// <field>
        /// Called after the AssignedTo1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("AssignedTo1"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Action content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Action_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("Action"); }],
        /// <field>
        /// Called after the DateActionAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("DateActionAssigned"); }],
        /// <field>
        /// Called after the ActionTargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionTargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("ActionTargetCompletionDate"); }],
        /// <field>
        /// Called after the DateActionCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("DateActionCompleted"); }],
        /// <field>
        /// Called after the CAPATab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CAPATab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("CAPATab"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("Group"); }],
        /// <field>
        /// Called after the CorrectiveAndPreventativeAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CorrectiveAndPreventativeAction_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("CorrectiveAndPreventativeAction"); }],
        /// <field>
        /// Called after the CorrectiveAndPreventativeActionTargetDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CorrectiveAndPreventativeActionTargetDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("CorrectiveAndPreventativeActionTargetDate"); }],
        /// <field>
        /// Called after the DateCorrectiveAndPreventativeActionClosed content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateCorrectiveAndPreventativeActionClosed_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("DateCorrectiveAndPreventativeActionClosed"); }],
        /// <field>
        /// Called after the NotesTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NotesTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("NotesTab"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("Group3"); }],
        /// <field>
        /// Called after the Notes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Notes_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditFinding().findContentItem("Notes"); }]
    });

    lightSwitchApplication.AddEditAuditor.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditor
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.AddEditAuditor,
            value: lightSwitchApplication.AddEditAuditor
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.AddEditAuditor,
            value: lightSwitchApplication.Auditor
        },
        top: {
            _$class: msls.ContentItem,
            _$name: "top",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.Auditor,
            value: lightSwitchApplication.Auditor
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.Auditor,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.Employee,
            value: String
        },
        bottom: {
            _$class: msls.ContentItem,
            _$name: "bottom",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.Auditor,
            value: lightSwitchApplication.Auditor
        },
        DateTrained: {
            _$class: msls.ContentItem,
            _$name: "DateTrained",
            _$parentName: "bottom",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.Auditor,
            value: Date
        },
        CurrentAuditor: {
            _$class: msls.ContentItem,
            _$name: "CurrentAuditor",
            _$parentName: "bottom",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.Auditor,
            value: Boolean
        },
        AuditsUndertakenTab: {
            _$class: msls.ContentItem,
            _$name: "AuditsUndertakenTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.AddEditAuditor,
            value: lightSwitchApplication.AddEditAuditor
        },
        AuditAuditors: {
            _$class: msls.ContentItem,
            _$name: "AuditAuditors",
            _$parentName: "AuditsUndertakenTab",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.AddEditAuditor,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditAuditor,
                _$entry: {
                    elementType: lightSwitchApplication.AuditAuditor
                }
            }
        },
        AuditAuditorsTemplate: {
            _$class: msls.ContentItem,
            _$name: "AuditAuditorsTemplate",
            _$parentName: "AuditAuditors",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.AuditAuditor,
            value: lightSwitchApplication.AuditAuditor
        },
        Audit_AuditCode: {
            _$class: msls.ContentItem,
            _$name: "Audit_AuditCode",
            _$parentName: "AuditAuditorsTemplate",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.AuditAuditor,
            value: String
        },
        Audit_AuditDescription: {
            _$class: msls.ContentItem,
            _$name: "Audit_AuditDescription",
            _$parentName: "AuditAuditorsTemplate",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.AuditAuditor,
            value: String
        },
        Audit_SchduledDate: {
            _$class: msls.ContentItem,
            _$name: "Audit_SchduledDate",
            _$parentName: "AuditAuditorsTemplate",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.AuditAuditor,
            value: Date
        },
        Audit_DateCompleted: {
            _$class: msls.ContentItem,
            _$name: "Audit_DateCompleted",
            _$parentName: "AuditAuditorsTemplate",
            screen: lightSwitchApplication.AddEditAuditor,
            data: lightSwitchApplication.AuditAuditor,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditor
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAuditor, {
        /// <field>
        /// Called when a new AddEditAuditor screen is created.
        /// <br/>created(msls.application.AddEditAuditor screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAuditor],
        /// <field>
        /// Called before changes on an active AddEditAuditor screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAuditor screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAuditor],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("columns"); }],
        /// <field>
        /// Called after the top content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        top_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("top"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the bottom content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        bottom_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("bottom"); }],
        /// <field>
        /// Called after the DateTrained content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrained_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("DateTrained"); }],
        /// <field>
        /// Called after the CurrentAuditor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CurrentAuditor_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("CurrentAuditor"); }],
        /// <field>
        /// Called after the AuditsUndertakenTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditsUndertakenTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("AuditsUndertakenTab"); }],
        /// <field>
        /// Called after the AuditAuditors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditAuditors_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("AuditAuditors"); }],
        /// <field>
        /// Called after the AuditAuditorsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditAuditorsTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("AuditAuditorsTemplate"); }],
        /// <field>
        /// Called after the Audit_AuditCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Audit_AuditCode_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("Audit_AuditCode"); }],
        /// <field>
        /// Called after the Audit_AuditDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Audit_AuditDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("Audit_AuditDescription"); }],
        /// <field>
        /// Called after the Audit_SchduledDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Audit_SchduledDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("Audit_SchduledDate"); }],
        /// <field>
        /// Called after the Audit_DateCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Audit_DateCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditor().findContentItem("Audit_DateCompleted"); }]
    });

    lightSwitchApplication.AddEditAuditStatus.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditStatus
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditStatus,
            data: lightSwitchApplication.AddEditAuditStatus,
            value: lightSwitchApplication.AddEditAuditStatus
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAuditStatus,
            data: lightSwitchApplication.AddEditAuditStatus,
            value: lightSwitchApplication.AuditStatus
        },
        AuditStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "AuditStatusDescription",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditStatus,
            data: lightSwitchApplication.AuditStatus,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditStatus,
            data: lightSwitchApplication.AuditStatus,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditStatus
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAuditStatus, {
        /// <field>
        /// Called when a new AddEditAuditStatus screen is created.
        /// <br/>created(msls.application.AddEditAuditStatus screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAuditStatus],
        /// <field>
        /// Called before changes on an active AddEditAuditStatus screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAuditStatus screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAuditStatus],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditStatus().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditStatus().findContentItem("columns"); }],
        /// <field>
        /// Called after the AuditStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditStatus().findContentItem("AuditStatusDescription"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditStatus().findContentItem("InUse"); }]
    });

    lightSwitchApplication.AddEditAuditType.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditType
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAuditType,
            data: lightSwitchApplication.AddEditAuditType,
            value: lightSwitchApplication.AddEditAuditType
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditAuditType,
            data: lightSwitchApplication.AddEditAuditType,
            value: lightSwitchApplication.AuditType
        },
        AuditTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "AuditTypeDescription",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditType,
            data: lightSwitchApplication.AuditType,
            value: String
        },
        inUse: {
            _$class: msls.ContentItem,
            _$name: "inUse",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAuditType,
            data: lightSwitchApplication.AuditType,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAuditType
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAuditType, {
        /// <field>
        /// Called when a new AddEditAuditType screen is created.
        /// <br/>created(msls.application.AddEditAuditType screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAuditType],
        /// <field>
        /// Called before changes on an active AddEditAuditType screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAuditType screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAuditType],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditType().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditType().findContentItem("columns"); }],
        /// <field>
        /// Called after the AuditTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditType().findContentItem("AuditTypeDescription"); }],
        /// <field>
        /// Called after the inUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        inUse_postRender: [$element, function () { return new lightSwitchApplication.AddEditAuditType().findContentItem("inUse"); }]
    });

    lightSwitchApplication.AddEditEmployee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.AddEditEmployee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.AddEditEmployee,
            value: lightSwitchApplication.Employee
        },
        top: {
            _$class: msls.ContentItem,
            _$name: "top",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "top",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        middle: {
            _$class: msls.ContentItem,
            _$name: "middle",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "middle",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: String
        },
        buttom: {
            _$class: msls.ContentItem,
            _$name: "buttom",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "buttom",
            screen: lightSwitchApplication.AddEditEmployee,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployee, {
        /// <field>
        /// Called when a new AddEditEmployee screen is created.
        /// <br/>created(msls.application.AddEditEmployee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called before changes on an active AddEditEmployee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployee],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("columns"); }],
        /// <field>
        /// Called after the top content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        top_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("top"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the middle content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        middle_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("middle"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Email"); }],
        /// <field>
        /// Called after the buttom content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        buttom_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("buttom"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployee().findContentItem("Current"); }]
    });

    lightSwitchApplication.AddEditFindingAction.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditFindingAction
        },
        DetailsTab: {
            _$class: msls.ContentItem,
            _$name: "DetailsTab",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.AddEditFindingAction,
            value: lightSwitchApplication.AddEditFindingAction
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "DetailsTab",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.AddEditFindingAction,
            value: lightSwitchApplication.FindingAction
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.FindingAction,
            value: lightSwitchApplication.FindingAction
        },
        Action: {
            _$class: msls.ContentItem,
            _$name: "Action",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.FindingAction,
            value: String
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.FindingAction,
            value: lightSwitchApplication.Employee
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.FindingAction,
            value: lightSwitchApplication.FindingAction
        },
        DateActionAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateActionAssigned",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.FindingAction,
            value: Date
        },
        ActionTargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "ActionTargetCompletionDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.FindingAction,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.FindingAction,
            value: lightSwitchApplication.FindingAction
        },
        ActionComment: {
            _$class: msls.ContentItem,
            _$name: "ActionComment",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.FindingAction,
            value: String
        },
        DateActionCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateActionCompleted",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditFindingAction,
            data: lightSwitchApplication.FindingAction,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditFindingAction
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditFindingAction, {
        /// <field>
        /// Called when a new AddEditFindingAction screen is created.
        /// <br/>created(msls.application.AddEditFindingAction screen)
        /// </field>
        created: [lightSwitchApplication.AddEditFindingAction],
        /// <field>
        /// Called before changes on an active AddEditFindingAction screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditFindingAction screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditFindingAction],
        /// <field>
        /// Called after the DetailsTab content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DetailsTab_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("DetailsTab"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("left"); }],
        /// <field>
        /// Called after the Action content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Action_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("Action"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("Group"); }],
        /// <field>
        /// Called after the DateActionAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionAssigned_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("DateActionAssigned"); }],
        /// <field>
        /// Called after the ActionTargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionTargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("ActionTargetCompletionDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("right"); }],
        /// <field>
        /// Called after the ActionComment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionComment_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("ActionComment"); }],
        /// <field>
        /// Called after the DateActionCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionCompleted_postRender: [$element, function () { return new lightSwitchApplication.AddEditFindingAction().findContentItem("DateActionCompleted"); }]
    });

    lightSwitchApplication.BrowseAllAuditFindings.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAllAuditFindings
        },
        AuditFindingList: {
            _$class: msls.ContentItem,
            _$name: "AuditFindingList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.BrowseAllAuditFindings,
            value: lightSwitchApplication.BrowseAllAuditFindings
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AuditFindingList",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.BrowseAllAuditFindings,
            value: String
        },
        AuditFinding: {
            _$class: msls.ContentItem,
            _$name: "AuditFinding",
            _$parentName: "AuditFindingList",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.BrowseAllAuditFindings,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAllAuditFindings,
                _$entry: {
                    elementType: lightSwitchApplication.AuditFinding
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AuditFinding",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: lightSwitchApplication.AuditFinding
        },
        Audit: {
            _$class: msls.ContentItem,
            _$name: "Audit",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: lightSwitchApplication.Audit
        },
        AuditCode: {
            _$class: msls.ContentItem,
            _$name: "AuditCode",
            _$parentName: "Audit",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.Audit,
            value: String
        },
        FindingReference: {
            _$class: msls.ContentItem,
            _$name: "FindingReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: String
        },
        FindingDescription: {
            _$class: msls.ContentItem,
            _$name: "FindingDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: String
        },
        FindingDate: {
            _$class: msls.ContentItem,
            _$name: "FindingDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.Employee,
            value: String
        },
        TargetResolutionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetResolutionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAllAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAllAuditFindings
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAllAuditFindings, {
        /// <field>
        /// Called when a new BrowseAllAuditFindings screen is created.
        /// <br/>created(msls.application.BrowseAllAuditFindings screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAllAuditFindings],
        /// <field>
        /// Called before changes on an active BrowseAllAuditFindings screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAllAuditFindings screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAllAuditFindings],
        /// <field>
        /// Called after the AuditFindingList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditFindingList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("AuditFindingList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("Search"); }],
        /// <field>
        /// Called after the AuditFinding content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditFinding_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("AuditFinding"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Audit content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Audit_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("Audit"); }],
        /// <field>
        /// Called after the AuditCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("AuditCode"); }],
        /// <field>
        /// Called after the FindingReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("FindingReference"); }],
        /// <field>
        /// Called after the FindingDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("FindingDescription"); }],
        /// <field>
        /// Called after the FindingDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("FindingDate"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the TargetResolutionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetResolutionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAllAuditFindings().findContentItem("TargetResolutionDate"); }]
    });

    lightSwitchApplication.BrowseAuditors.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAuditors
        },
        AuditorList: {
            _$class: msls.ContentItem,
            _$name: "AuditorList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAuditors,
            data: lightSwitchApplication.BrowseAuditors,
            value: lightSwitchApplication.BrowseAuditors
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AuditorList",
            screen: lightSwitchApplication.BrowseAuditors,
            data: lightSwitchApplication.BrowseAuditors,
            value: String
        },
        Auditor: {
            _$class: msls.ContentItem,
            _$name: "Auditor",
            _$parentName: "AuditorList",
            screen: lightSwitchApplication.BrowseAuditors,
            data: lightSwitchApplication.BrowseAuditors,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAuditors,
                _$entry: {
                    elementType: lightSwitchApplication.Auditor
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Auditor",
            screen: lightSwitchApplication.BrowseAuditors,
            data: lightSwitchApplication.Auditor,
            value: lightSwitchApplication.Auditor
        },
        Employee_FirstName: {
            _$class: msls.ContentItem,
            _$name: "Employee_FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAuditors,
            data: lightSwitchApplication.Auditor,
            value: String
        },
        Employee_LastName: {
            _$class: msls.ContentItem,
            _$name: "Employee_LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAuditors,
            data: lightSwitchApplication.Auditor,
            value: String
        },
        DateTrained: {
            _$class: msls.ContentItem,
            _$name: "DateTrained",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAuditors,
            data: lightSwitchApplication.Auditor,
            value: Date
        },
        CurrentAuditor: {
            _$class: msls.ContentItem,
            _$name: "CurrentAuditor",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAuditors,
            data: lightSwitchApplication.Auditor,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAuditors
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAuditors, {
        /// <field>
        /// Called when a new BrowseAuditors screen is created.
        /// <br/>created(msls.application.BrowseAuditors screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAuditors],
        /// <field>
        /// Called before changes on an active BrowseAuditors screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAuditors screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAuditors],
        /// <field>
        /// Called after the AuditorList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditorList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditors().findContentItem("AuditorList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditors().findContentItem("Search"); }],
        /// <field>
        /// Called after the Auditor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Auditor_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditors().findContentItem("Auditor"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditors().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Employee_FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditors().findContentItem("Employee_FirstName"); }],
        /// <field>
        /// Called after the Employee_LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditors().findContentItem("Employee_LastName"); }],
        /// <field>
        /// Called after the DateTrained content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateTrained_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditors().findContentItem("DateTrained"); }],
        /// <field>
        /// Called after the CurrentAuditor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CurrentAuditor_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditors().findContentItem("CurrentAuditor"); }]
    });

    lightSwitchApplication.BrowseAudits.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAudits
        },
        AuditList: {
            _$class: msls.ContentItem,
            _$name: "AuditList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAudits,
            data: lightSwitchApplication.BrowseAudits,
            value: lightSwitchApplication.BrowseAudits
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AuditList",
            screen: lightSwitchApplication.BrowseAudits,
            data: lightSwitchApplication.BrowseAudits,
            value: String
        },
        Audit: {
            _$class: msls.ContentItem,
            _$name: "Audit",
            _$parentName: "AuditList",
            screen: lightSwitchApplication.BrowseAudits,
            data: lightSwitchApplication.BrowseAudits,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAudits,
                _$entry: {
                    elementType: lightSwitchApplication.Audit
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Audit",
            screen: lightSwitchApplication.BrowseAudits,
            data: lightSwitchApplication.Audit,
            value: lightSwitchApplication.Audit
        },
        AuditType: {
            _$class: msls.ContentItem,
            _$name: "AuditType",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAudits,
            data: lightSwitchApplication.Audit,
            value: lightSwitchApplication.AuditType
        },
        AuditCode: {
            _$class: msls.ContentItem,
            _$name: "AuditCode",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAudits,
            data: lightSwitchApplication.Audit,
            value: String
        },
        AuditDescription: {
            _$class: msls.ContentItem,
            _$name: "AuditDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAudits,
            data: lightSwitchApplication.Audit,
            value: String
        },
        SchduledDate: {
            _$class: msls.ContentItem,
            _$name: "SchduledDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAudits,
            data: lightSwitchApplication.Audit,
            value: Date
        },
        AuditStatus: {
            _$class: msls.ContentItem,
            _$name: "AuditStatus",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAudits,
            data: lightSwitchApplication.Audit,
            value: lightSwitchApplication.AuditStatus
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAudits
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAudits, {
        /// <field>
        /// Called when a new BrowseAudits screen is created.
        /// <br/>created(msls.application.BrowseAudits screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAudits],
        /// <field>
        /// Called before changes on an active BrowseAudits screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAudits screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAudits],
        /// <field>
        /// Called after the AuditList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAudits().findContentItem("AuditList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseAudits().findContentItem("Search"); }],
        /// <field>
        /// Called after the Audit content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Audit_postRender: [$element, function () { return new lightSwitchApplication.BrowseAudits().findContentItem("Audit"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAudits().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the AuditType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditType_postRender: [$element, function () { return new lightSwitchApplication.BrowseAudits().findContentItem("AuditType"); }],
        /// <field>
        /// Called after the AuditCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseAudits().findContentItem("AuditCode"); }],
        /// <field>
        /// Called after the AuditDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseAudits().findContentItem("AuditDescription"); }],
        /// <field>
        /// Called after the SchduledDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SchduledDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAudits().findContentItem("SchduledDate"); }],
        /// <field>
        /// Called after the AuditStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseAudits().findContentItem("AuditStatus"); }]
    });

    lightSwitchApplication.BrowseAuditStatuses.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAuditStatuses
        },
        AuditStatusList: {
            _$class: msls.ContentItem,
            _$name: "AuditStatusList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAuditStatuses,
            data: lightSwitchApplication.BrowseAuditStatuses,
            value: lightSwitchApplication.BrowseAuditStatuses
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AuditStatusList",
            screen: lightSwitchApplication.BrowseAuditStatuses,
            data: lightSwitchApplication.BrowseAuditStatuses,
            value: String
        },
        AuditStatus: {
            _$class: msls.ContentItem,
            _$name: "AuditStatus",
            _$parentName: "AuditStatusList",
            screen: lightSwitchApplication.BrowseAuditStatuses,
            data: lightSwitchApplication.BrowseAuditStatuses,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAuditStatuses,
                _$entry: {
                    elementType: lightSwitchApplication.AuditStatus
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AuditStatus",
            screen: lightSwitchApplication.BrowseAuditStatuses,
            data: lightSwitchApplication.AuditStatus,
            value: lightSwitchApplication.AuditStatus
        },
        AuditStatusDescription: {
            _$class: msls.ContentItem,
            _$name: "AuditStatusDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAuditStatuses,
            data: lightSwitchApplication.AuditStatus,
            value: String
        },
        InUse: {
            _$class: msls.ContentItem,
            _$name: "InUse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAuditStatuses,
            data: lightSwitchApplication.AuditStatus,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAuditStatuses
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAuditStatuses, {
        /// <field>
        /// Called when a new BrowseAuditStatuses screen is created.
        /// <br/>created(msls.application.BrowseAuditStatuses screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAuditStatuses],
        /// <field>
        /// Called before changes on an active BrowseAuditStatuses screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAuditStatuses screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAuditStatuses],
        /// <field>
        /// Called after the AuditStatusList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditStatusList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditStatuses().findContentItem("AuditStatusList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditStatuses().findContentItem("Search"); }],
        /// <field>
        /// Called after the AuditStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditStatuses().findContentItem("AuditStatus"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditStatuses().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the AuditStatusDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditStatusDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditStatuses().findContentItem("AuditStatusDescription"); }],
        /// <field>
        /// Called after the InUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        InUse_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditStatuses().findContentItem("InUse"); }]
    });

    lightSwitchApplication.BrowseAuditTypes.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAuditTypes
        },
        AuditTypeList: {
            _$class: msls.ContentItem,
            _$name: "AuditTypeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAuditTypes,
            data: lightSwitchApplication.BrowseAuditTypes,
            value: lightSwitchApplication.BrowseAuditTypes
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AuditTypeList",
            screen: lightSwitchApplication.BrowseAuditTypes,
            data: lightSwitchApplication.BrowseAuditTypes,
            value: String
        },
        AuditType: {
            _$class: msls.ContentItem,
            _$name: "AuditType",
            _$parentName: "AuditTypeList",
            screen: lightSwitchApplication.BrowseAuditTypes,
            data: lightSwitchApplication.BrowseAuditTypes,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAuditTypes,
                _$entry: {
                    elementType: lightSwitchApplication.AuditType
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AuditType",
            screen: lightSwitchApplication.BrowseAuditTypes,
            data: lightSwitchApplication.AuditType,
            value: lightSwitchApplication.AuditType
        },
        AuditTypeDescription: {
            _$class: msls.ContentItem,
            _$name: "AuditTypeDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAuditTypes,
            data: lightSwitchApplication.AuditType,
            value: String
        },
        inUse: {
            _$class: msls.ContentItem,
            _$name: "inUse",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseAuditTypes,
            data: lightSwitchApplication.AuditType,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAuditTypes
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAuditTypes, {
        /// <field>
        /// Called when a new BrowseAuditTypes screen is created.
        /// <br/>created(msls.application.BrowseAuditTypes screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAuditTypes],
        /// <field>
        /// Called before changes on an active BrowseAuditTypes screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAuditTypes screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAuditTypes],
        /// <field>
        /// Called after the AuditTypeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditTypeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditTypes().findContentItem("AuditTypeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditTypes().findContentItem("Search"); }],
        /// <field>
        /// Called after the AuditType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditType_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditTypes().findContentItem("AuditType"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditTypes().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the AuditTypeDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditTypeDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditTypes().findContentItem("AuditTypeDescription"); }],
        /// <field>
        /// Called after the inUse content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        inUse_postRender: [$element, function () { return new lightSwitchApplication.BrowseAuditTypes().findContentItem("inUse"); }]
    });

    lightSwitchApplication.BrowseEmployees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        },
        EmployeeList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: lightSwitchApplication.BrowseEmployees
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: String
        },
        Employee: {
            _$class: msls.ContentItem,
            _$name: "Employee",
            _$parentName: "EmployeeList",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.BrowseEmployees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployees,
                _$entry: {
                    elementType: lightSwitchApplication.Employee
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Employee",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: lightSwitchApplication.Employee
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: String
        },
        Current: {
            _$class: msls.ContentItem,
            _$name: "Current",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseEmployees,
            data: lightSwitchApplication.Employee,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployees, {
        /// <field>
        /// Called when a new BrowseEmployees screen is created.
        /// <br/>created(msls.application.BrowseEmployees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called before changes on an active BrowseEmployees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployees],
        /// <field>
        /// Called after the EmployeeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("EmployeeList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Search"); }],
        /// <field>
        /// Called after the Employee content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employee_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Employee"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Email"); }],
        /// <field>
        /// Called after the Current content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Current_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployees().findContentItem("Current"); }]
    });

    lightSwitchApplication.BrowseMyAssignedAuditFindings.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings
        },
        AuditFindingList: {
            _$class: msls.ContentItem,
            _$name: "AuditFindingList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            value: lightSwitchApplication.BrowseMyAssignedAuditFindings
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "AuditFindingList",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            value: String
        },
        AuditFinding: {
            _$class: msls.ContentItem,
            _$name: "AuditFinding",
            _$parentName: "AuditFindingList",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
                _$entry: {
                    elementType: lightSwitchApplication.AuditFinding
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "AuditFinding",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: lightSwitchApplication.AuditFinding
        },
        Audit: {
            _$class: msls.ContentItem,
            _$name: "Audit",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: lightSwitchApplication.Audit
        },
        AuditCode: {
            _$class: msls.ContentItem,
            _$name: "AuditCode",
            _$parentName: "Audit",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.Audit,
            value: String
        },
        FindingReference: {
            _$class: msls.ContentItem,
            _$name: "FindingReference",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: String
        },
        FindingDescription: {
            _$class: msls.ContentItem,
            _$name: "FindingDescription",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: String
        },
        FindingDate: {
            _$class: msls.ContentItem,
            _$name: "FindingDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.Employee,
            value: String
        },
        TargetResolutionDate: {
            _$class: msls.ContentItem,
            _$name: "TargetResolutionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings,
            data: lightSwitchApplication.AuditFinding,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyAssignedAuditFindings
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyAssignedAuditFindings, {
        /// <field>
        /// Called when a new BrowseMyAssignedAuditFindings screen is created.
        /// <br/>created(msls.application.BrowseMyAssignedAuditFindings screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyAssignedAuditFindings],
        /// <field>
        /// Called before changes on an active BrowseMyAssignedAuditFindings screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyAssignedAuditFindings screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyAssignedAuditFindings],
        /// <field>
        /// Called after the AuditFindingList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditFindingList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("AuditFindingList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("Search"); }],
        /// <field>
        /// Called after the AuditFinding content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditFinding_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("AuditFinding"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Audit content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Audit_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("Audit"); }],
        /// <field>
        /// Called after the AuditCode content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditCode_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("AuditCode"); }],
        /// <field>
        /// Called after the FindingReference content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingReference_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("FindingReference"); }],
        /// <field>
        /// Called after the FindingDescription content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingDescription_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("FindingDescription"); }],
        /// <field>
        /// Called after the FindingDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("FindingDate"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the TargetResolutionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TargetResolutionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAssignedAuditFindings().findContentItem("TargetResolutionDate"); }]
    });

    lightSwitchApplication.BrowseMyAuditFindingActions.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions
        },
        FindingActionList: {
            _$class: msls.ContentItem,
            _$name: "FindingActionList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.BrowseMyAuditFindingActions,
            value: lightSwitchApplication.BrowseMyAuditFindingActions
        },
        Search: {
            _$class: msls.ContentItem,
            _$name: "Search",
            _$parentName: "FindingActionList",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.BrowseMyAuditFindingActions,
            value: String
        },
        FindingAction: {
            _$class: msls.ContentItem,
            _$name: "FindingAction",
            _$parentName: "FindingActionList",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.BrowseMyAuditFindingActions,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMyAuditFindingActions,
                _$entry: {
                    elementType: lightSwitchApplication.FindingAction
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "FindingAction",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.FindingAction,
            value: lightSwitchApplication.FindingAction
        },
        Action: {
            _$class: msls.ContentItem,
            _$name: "Action",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.FindingAction,
            value: String
        },
        AssignedTo: {
            _$class: msls.ContentItem,
            _$name: "AssignedTo",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.FindingAction,
            value: lightSwitchApplication.Employee
        },
        LastName: {
            _$class: msls.ContentItem,
            _$name: "LastName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.Employee,
            value: String
        },
        FirstName: {
            _$class: msls.ContentItem,
            _$name: "FirstName",
            _$parentName: "AssignedTo",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.Employee,
            value: String
        },
        DateActionAssigned: {
            _$class: msls.ContentItem,
            _$name: "DateActionAssigned",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.FindingAction,
            value: Date
        },
        ActionTargetCompletionDate: {
            _$class: msls.ContentItem,
            _$name: "ActionTargetCompletionDate",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.FindingAction,
            value: Date
        },
        DateActionCompleted: {
            _$class: msls.ContentItem,
            _$name: "DateActionCompleted",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions,
            data: lightSwitchApplication.FindingAction,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMyAuditFindingActions
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMyAuditFindingActions, {
        /// <field>
        /// Called when a new BrowseMyAuditFindingActions screen is created.
        /// <br/>created(msls.application.BrowseMyAuditFindingActions screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMyAuditFindingActions],
        /// <field>
        /// Called before changes on an active BrowseMyAuditFindingActions screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMyAuditFindingActions screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMyAuditFindingActions],
        /// <field>
        /// Called after the FindingActionList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingActionList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("FindingActionList"); }],
        /// <field>
        /// Called after the Search content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Search_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("Search"); }],
        /// <field>
        /// Called after the FindingAction content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FindingAction_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("FindingAction"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Action content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Action_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("Action"); }],
        /// <field>
        /// Called after the AssignedTo content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignedTo_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("AssignedTo"); }],
        /// <field>
        /// Called after the LastName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LastName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("LastName"); }],
        /// <field>
        /// Called after the FirstName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FirstName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("FirstName"); }],
        /// <field>
        /// Called after the DateActionAssigned content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionAssigned_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("DateActionAssigned"); }],
        /// <field>
        /// Called after the ActionTargetCompletionDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActionTargetCompletionDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("ActionTargetCompletionDate"); }],
        /// <field>
        /// Called after the DateActionCompleted content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DateActionCompleted_postRender: [$element, function () { return new lightSwitchApplication.BrowseMyAuditFindingActions().findContentItem("DateActionCompleted"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ManageAudits: {
            _$class: msls.ContentItem,
            _$name: "ManageAudits",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        ManageAuditors: {
            _$class: msls.ContentItem,
            _$name: "ManageAuditors",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        AllAuditFindings: {
            _$class: msls.ContentItem,
            _$name: "AllAuditFindings",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        MyAuditFindings: {
            _$class: msls.ContentItem,
            _$name: "MyAuditFindings",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        MyFindingActions: {
            _$class: msls.ContentItem,
            _$name: "MyFindingActions",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called after the ManageAudits content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageAudits_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageAudits"); }],
        /// <field>
        /// Called after the ManageAuditors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManageAuditors_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ManageAuditors"); }],
        /// <field>
        /// Called after the AllAuditFindings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllAuditFindings_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("AllAuditFindings"); }],
        /// <field>
        /// Called after the MyAuditFindings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyAuditFindings_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyAuditFindings"); }],
        /// <field>
        /// Called after the MyFindingActions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyFindingActions_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("MyFindingActions"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Settings"); }]
    });

    lightSwitchApplication.MobileHome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileHome,
            data: lightSwitchApplication.MobileHome,
            value: lightSwitchApplication.MobileHome
        },
        Audits: {
            _$class: msls.ContentItem,
            _$name: "Audits",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Auditors: {
            _$class: msls.ContentItem,
            _$name: "Auditors",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        AllFindings: {
            _$class: msls.ContentItem,
            _$name: "AllFindings",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        MyFindings: {
            _$class: msls.ContentItem,
            _$name: "MyFindings",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        MyActions: {
            _$class: msls.ContentItem,
            _$name: "MyActions",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Settings: {
            _$class: msls.ContentItem,
            _$name: "Settings",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileHome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileHome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileHome, {
        /// <field>
        /// Called when a new MobileHome screen is created.
        /// <br/>created(msls.application.MobileHome screen)
        /// </field>
        created: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called before changes on an active MobileHome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileHome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileHome],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Group"); }],
        /// <field>
        /// Called after the Audits content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Audits_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Audits"); }],
        /// <field>
        /// Called after the Auditors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Auditors_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Auditors"); }],
        /// <field>
        /// Called after the AllFindings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllFindings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("AllFindings"); }],
        /// <field>
        /// Called after the MyFindings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyFindings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyFindings"); }],
        /// <field>
        /// Called after the MyActions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyActions_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("MyActions"); }],
        /// <field>
        /// Called after the Settings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Settings_postRender: [$element, function () { return new lightSwitchApplication.MobileHome().findContentItem("Settings"); }]
    });

    lightSwitchApplication.MobileSettings.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileSettings
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MobileSettings,
            data: lightSwitchApplication.MobileSettings,
            value: lightSwitchApplication.MobileSettings
        },
        AuditTypes: {
            _$class: msls.ContentItem,
            _$name: "AuditTypes",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        AuditStatuses: {
            _$class: msls.ContentItem,
            _$name: "AuditStatuses",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Group",
            screen: lightSwitchApplication.MobileSettings
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MobileSettings
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MobileSettings, {
        /// <field>
        /// Called when a new MobileSettings screen is created.
        /// <br/>created(msls.application.MobileSettings screen)
        /// </field>
        created: [lightSwitchApplication.MobileSettings],
        /// <field>
        /// Called before changes on an active MobileSettings screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MobileSettings screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MobileSettings],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("Group"); }],
        /// <field>
        /// Called after the AuditTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditTypes_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("AuditTypes"); }],
        /// <field>
        /// Called after the AuditStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditStatuses_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("AuditStatuses"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.MobileSettings().findContentItem("Employees"); }]
    });

    lightSwitchApplication.Settings.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Settings
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Settings,
            data: lightSwitchApplication.Settings,
            value: lightSwitchApplication.Settings
        },
        AuditTypes: {
            _$class: msls.ContentItem,
            _$name: "AuditTypes",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        AuditStatuses: {
            _$class: msls.ContentItem,
            _$name: "AuditStatuses",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        Employees: {
            _$class: msls.ContentItem,
            _$name: "Employees",
            _$parentName: "Group",
            screen: lightSwitchApplication.Settings
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Settings
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Settings, {
        /// <field>
        /// Called when a new Settings screen is created.
        /// <br/>created(msls.application.Settings screen)
        /// </field>
        created: [lightSwitchApplication.Settings],
        /// <field>
        /// Called before changes on an active Settings screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Settings screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Settings],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("Group"); }],
        /// <field>
        /// Called after the AuditTypes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditTypes_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("AuditTypes"); }],
        /// <field>
        /// Called after the AuditStatuses content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AuditStatuses_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("AuditStatuses"); }],
        /// <field>
        /// Called after the Employees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Employees_postRender: [$element, function () { return new lightSwitchApplication.Settings().findContentItem("Employees"); }]
    });

}(msls.application));