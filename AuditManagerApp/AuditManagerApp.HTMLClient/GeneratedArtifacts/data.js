/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Audit(entitySet) {
        /// <summary>
        /// Represents the Audit entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this audit.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this audit.
        /// </field>
        /// <field name="AuditCode" type="String">
        /// Gets or sets the auditCode for this audit.
        /// </field>
        /// <field name="AuditDescription" type="String">
        /// Gets or sets the auditDescription for this audit.
        /// </field>
        /// <field name="SchduledDate" type="Date">
        /// Gets or sets the schduledDate for this audit.
        /// </field>
        /// <field name="DateStarted" type="Date">
        /// Gets or sets the dateStarted for this audit.
        /// </field>
        /// <field name="DateCompleted" type="Date">
        /// Gets or sets the dateCompleted for this audit.
        /// </field>
        /// <field name="AuditType" type="msls.application.AuditType">
        /// Gets or sets the auditType for this audit.
        /// </field>
        /// <field name="AuditStatus" type="msls.application.AuditStatus">
        /// Gets or sets the auditStatus for this audit.
        /// </field>
        /// <field name="AuditAuditors" type="msls.EntityCollection" elementType="msls.application.AuditAuditor">
        /// Gets the auditAuditors for this audit.
        /// </field>
        /// <field name="AuditFindings" type="msls.EntityCollection" elementType="msls.application.AuditFinding">
        /// Gets the auditFindings for this audit.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this audit.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this audit.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this audit.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this audit.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this audit.
        /// </field>
        /// <field name="details" type="msls.application.Audit.Details">
        /// Gets the details for this audit.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AuditType(entitySet) {
        /// <summary>
        /// Represents the AuditType entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this auditType.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this auditType.
        /// </field>
        /// <field name="AuditTypeDescription" type="String">
        /// Gets or sets the auditTypeDescription for this auditType.
        /// </field>
        /// <field name="inUse" type="Boolean">
        /// Gets or sets the inUse for this auditType.
        /// </field>
        /// <field name="Audits" type="msls.EntityCollection" elementType="msls.application.Audit">
        /// Gets the audits for this auditType.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this auditType.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this auditType.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this auditType.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this auditType.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this auditType.
        /// </field>
        /// <field name="details" type="msls.application.AuditType.Details">
        /// Gets the details for this auditType.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AuditStatus(entitySet) {
        /// <summary>
        /// Represents the AuditStatus entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this auditStatus.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this auditStatus.
        /// </field>
        /// <field name="AuditStatusDescription" type="String">
        /// Gets or sets the auditStatusDescription for this auditStatus.
        /// </field>
        /// <field name="InUse" type="Boolean">
        /// Gets or sets the inUse for this auditStatus.
        /// </field>
        /// <field name="Audits" type="msls.EntityCollection" elementType="msls.application.Audit">
        /// Gets the audits for this auditStatus.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this auditStatus.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this auditStatus.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this auditStatus.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this auditStatus.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this auditStatus.
        /// </field>
        /// <field name="details" type="msls.application.AuditStatus.Details">
        /// Gets the details for this auditStatus.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Auditor(entitySet) {
        /// <summary>
        /// Represents the Auditor entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this auditor.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this auditor.
        /// </field>
        /// <field name="DateTrained" type="Date">
        /// Gets or sets the dateTrained for this auditor.
        /// </field>
        /// <field name="CurrentAuditor" type="Boolean">
        /// Gets or sets the currentAuditor for this auditor.
        /// </field>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this auditor.
        /// </field>
        /// <field name="AuditAuditors" type="msls.EntityCollection" elementType="msls.application.AuditAuditor">
        /// Gets the auditAuditors for this auditor.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this auditor.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this auditor.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this auditor.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this auditor.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this auditor.
        /// </field>
        /// <field name="details" type="msls.application.Auditor.Details">
        /// Gets the details for this auditor.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="UserName" type="String">
        /// This is the user name of the 
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employee.
        /// </field>
        /// <field name="Current" type="Boolean">
        /// Gets or sets the current for this employee.
        /// </field>
        /// <field name="Auditors" type="msls.EntityCollection" elementType="msls.application.Auditor">
        /// Gets the auditors for this employee.
        /// </field>
        /// <field name="AuditFindings" type="msls.EntityCollection" elementType="msls.application.AuditFinding">
        /// Gets the auditFindings for this employee.
        /// </field>
        /// <field name="FindingAction" type="msls.EntityCollection" elementType="msls.application.FindingAction">
        /// Gets the findingAction for this employee.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this employee.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this employee.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this employee.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this employee.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AuditAuditor(entitySet) {
        /// <summary>
        /// Represents the AuditAuditor entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this auditAuditor.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this auditAuditor.
        /// </field>
        /// <field name="Audit" type="msls.application.Audit">
        /// Gets or sets the audit for this auditAuditor.
        /// </field>
        /// <field name="Auditor" type="msls.application.Auditor">
        /// Gets or sets the auditor for this auditAuditor.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this auditAuditor.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this auditAuditor.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this auditAuditor.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this auditAuditor.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this auditAuditor.
        /// </field>
        /// <field name="details" type="msls.application.AuditAuditor.Details">
        /// Gets the details for this auditAuditor.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AuditFinding(entitySet) {
        /// <summary>
        /// Represents the AuditFinding entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this auditFinding.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this auditFinding.
        /// </field>
        /// <field name="FindingReference" type="String">
        /// Gets or sets the findingReference for this auditFinding.
        /// </field>
        /// <field name="FindingDescription" type="String">
        /// Gets or sets the findingDescription for this auditFinding.
        /// </field>
        /// <field name="FindingDate" type="Date">
        /// Gets or sets the findingDate for this auditFinding.
        /// </field>
        /// <field name="TargetResolutionDate" type="Date">
        /// Gets or sets the targetResolutionDate for this auditFinding.
        /// </field>
        /// <field name="FindingImpactAssessment" type="String">
        /// Gets or sets the findingImpactAssessment for this auditFinding.
        /// </field>
        /// <field name="ImmediateAction" type="String">
        /// Gets or sets the immediateAction for this auditFinding.
        /// </field>
        /// <field name="CorrectiveAndPreventativeAction" type="String">
        /// Gets or sets the correctiveAndPreventativeAction for this auditFinding.
        /// </field>
        /// <field name="CorrectiveAndPreventativeActionTargetDate" type="Date">
        /// Gets or sets the correctiveAndPreventativeActionTargetDate for this auditFinding.
        /// </field>
        /// <field name="DateCorrectiveAndPreventativeActionClosed" type="Date">
        /// Gets or sets the dateCorrectiveAndPreventativeActionClosed for this auditFinding.
        /// </field>
        /// <field name="DateFindingClosed" type="Date">
        /// Gets or sets the dateFindingClosed for this auditFinding.
        /// </field>
        /// <field name="AssignedTo" type="msls.application.Employee">
        /// Gets or sets the assignedTo for this auditFinding.
        /// </field>
        /// <field name="Notes" type="String">
        /// Gets or sets the notes for this auditFinding.
        /// </field>
        /// <field name="FindingAction" type="msls.EntityCollection" elementType="msls.application.FindingAction">
        /// Gets the findingAction for this auditFinding.
        /// </field>
        /// <field name="Audit" type="msls.application.Audit">
        /// Gets or sets the audit for this auditFinding.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this auditFinding.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this auditFinding.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this auditFinding.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this auditFinding.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this auditFinding.
        /// </field>
        /// <field name="details" type="msls.application.AuditFinding.Details">
        /// Gets the details for this auditFinding.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function FindingAction(entitySet) {
        /// <summary>
        /// Represents the FindingAction entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this findingAction.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this findingAction.
        /// </field>
        /// <field name="Action" type="String">
        /// Gets or sets the action for this findingAction.
        /// </field>
        /// <field name="ActionComment" type="String">
        /// Gets or sets the actionComment for this findingAction.
        /// </field>
        /// <field name="DateActionAssigned" type="Date">
        /// Gets or sets the dateActionAssigned for this findingAction.
        /// </field>
        /// <field name="ActionTargetCompletionDate" type="Date">
        /// Gets or sets the actionTargetCompletionDate for this findingAction.
        /// </field>
        /// <field name="DateActionCompleted" type="Date">
        /// Gets or sets the dateActionCompleted for this findingAction.
        /// </field>
        /// <field name="AssignedTo" type="msls.application.Employee">
        /// Gets or sets the assignedTo for this findingAction.
        /// </field>
        /// <field name="AuditFinding" type="msls.application.AuditFinding">
        /// Gets or sets the auditFinding for this findingAction.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this findingAction.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this findingAction.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this findingAction.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this findingAction.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this findingAction.
        /// </field>
        /// <field name="details" type="msls.application.FindingAction.Details">
        /// Gets the details for this findingAction.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Audits" type="msls.EntitySet">
        /// Gets the Audits entity set.
        /// </field>
        /// <field name="AuditTypes" type="msls.EntitySet">
        /// Gets the AuditTypes entity set.
        /// </field>
        /// <field name="AuditStatuses" type="msls.EntitySet">
        /// Gets the AuditStatuses entity set.
        /// </field>
        /// <field name="Auditors" type="msls.EntitySet">
        /// Gets the Auditors entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="AuditAuditors" type="msls.EntitySet">
        /// Gets the AuditAuditors entity set.
        /// </field>
        /// <field name="AuditFindings" type="msls.EntitySet">
        /// Gets the AuditFindings entity set.
        /// </field>
        /// <field name="FindingActions" type="msls.EntitySet">
        /// Gets the FindingActions entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Audit: $defineEntity(Audit, [
            { name: "Id", type: Number },
            { name: "AuditCode", type: String },
            { name: "AuditDescription", type: String },
            { name: "SchduledDate", type: Date },
            { name: "DateStarted", type: Date },
            { name: "DateCompleted", type: Date },
            { name: "AuditType", kind: "reference", type: AuditType },
            { name: "AuditStatus", kind: "reference", type: AuditStatus },
            { name: "AuditAuditors", kind: "collection", elementType: AuditAuditor },
            { name: "AuditFindings", kind: "collection", elementType: AuditFinding },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AuditType: $defineEntity(AuditType, [
            { name: "Id", type: Number },
            { name: "AuditTypeDescription", type: String },
            { name: "inUse", type: Boolean },
            { name: "Audits", kind: "collection", elementType: Audit },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AuditStatus: $defineEntity(AuditStatus, [
            { name: "Id", type: Number },
            { name: "AuditStatusDescription", type: String },
            { name: "InUse", type: Boolean },
            { name: "Audits", kind: "collection", elementType: Audit },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Auditor: $defineEntity(Auditor, [
            { name: "Id", type: Number },
            { name: "DateTrained", type: Date },
            { name: "CurrentAuditor", type: Boolean },
            { name: "Employee", kind: "reference", type: Employee },
            { name: "AuditAuditors", kind: "collection", elementType: AuditAuditor },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "Id", type: Number },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "UserName", type: String },
            { name: "Email", type: String },
            { name: "Current", type: Boolean },
            { name: "Auditors", kind: "collection", elementType: Auditor },
            { name: "AuditFindings", kind: "collection", elementType: AuditFinding },
            { name: "FindingAction", kind: "collection", elementType: FindingAction },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AuditAuditor: $defineEntity(AuditAuditor, [
            { name: "Id", type: Number },
            { name: "Audit", kind: "reference", type: Audit },
            { name: "Auditor", kind: "reference", type: Auditor },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        AuditFinding: $defineEntity(AuditFinding, [
            { name: "Id", type: Number },
            { name: "FindingReference", type: String },
            { name: "FindingDescription", type: String },
            { name: "FindingDate", type: Date },
            { name: "TargetResolutionDate", type: Date },
            { name: "FindingImpactAssessment", type: String },
            { name: "ImmediateAction", type: String },
            { name: "CorrectiveAndPreventativeAction", type: String },
            { name: "CorrectiveAndPreventativeActionTargetDate", type: Date },
            { name: "DateCorrectiveAndPreventativeActionClosed", type: Date },
            { name: "DateFindingClosed", type: Date },
            { name: "AssignedTo", kind: "reference", type: Employee },
            { name: "Notes", type: String },
            { name: "FindingAction", kind: "collection", elementType: FindingAction },
            { name: "Audit", kind: "reference", type: Audit },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        FindingAction: $defineEntity(FindingAction, [
            { name: "Id", type: Number },
            { name: "Action", type: String },
            { name: "ActionComment", type: String },
            { name: "DateActionAssigned", type: Date },
            { name: "ActionTargetCompletionDate", type: Date },
            { name: "DateActionCompleted", type: Date },
            { name: "AssignedTo", kind: "reference", type: Employee },
            { name: "AuditFinding", kind: "reference", type: AuditFinding },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Audits", elementType: Audit },
            { name: "AuditTypes", elementType: AuditType },
            { name: "AuditStatuses", elementType: AuditStatus },
            { name: "Auditors", elementType: Auditor },
            { name: "Employees", elementType: Employee },
            { name: "AuditAuditors", elementType: AuditAuditor },
            { name: "AuditFindings", elementType: AuditFinding },
            { name: "FindingActions", elementType: FindingAction }
        ], [
            {
                name: "Audits_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Audits },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Audits(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AuditTypes_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AuditTypes },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AuditTypes(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AuditStatuses_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AuditStatuses },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AuditStatuses(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Auditors_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Auditors },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Auditors(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Employees(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AuditAuditors_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AuditAuditors },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AuditAuditors(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AuditFindings_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AuditFindings },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AuditFindings(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "FindingActions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.FindingActions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/FindingActions(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MyAuditFindingActions", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.FindingActions },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyAuditFindingActions()",
                        {
                        });
                }
            },
            {
                name: "MyAssignedAuditFindings", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.AuditFindings },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MyAssignedAuditFindings()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
