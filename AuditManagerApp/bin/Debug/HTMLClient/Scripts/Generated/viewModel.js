/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditAudit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAudit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Audit" type="msls.application.Audit">
        /// Gets or sets the audit for this screen.
        /// </field>
        /// <field name="AuditAuditors" type="msls.VisualCollection" elementType="msls.application.AuditAuditor">
        /// Gets the auditAuditors for this screen.
        /// </field>
        /// <field name="AuditFindings" type="msls.VisualCollection" elementType="msls.application.AuditFinding">
        /// Gets the auditFindings for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAudit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAudit", parameters);
    }

    function AddEditAuditAuditor(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAuditAuditor screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AuditAuditor" type="msls.application.AuditAuditor">
        /// Gets or sets the auditAuditor for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAuditAuditor.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAuditAuditor", parameters);
    }

    function AddEditAuditFinding(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAuditFinding screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AuditFinding" type="msls.application.AuditFinding">
        /// Gets or sets the auditFinding for this screen.
        /// </field>
        /// <field name="FindingAction" type="msls.VisualCollection" elementType="msls.application.FindingAction">
        /// Gets the findingAction for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAuditFinding.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAuditFinding", parameters);
    }

    function AddEditAuditor(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAuditor screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Auditor" type="msls.application.Auditor">
        /// Gets or sets the auditor for this screen.
        /// </field>
        /// <field name="AuditAuditors" type="msls.VisualCollection" elementType="msls.application.AuditAuditor">
        /// Gets the auditAuditors for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAuditor.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAuditor", parameters);
    }

    function AddEditAuditStatus(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAuditStatus screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AuditStatus" type="msls.application.AuditStatus">
        /// Gets or sets the auditStatus for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAuditStatus.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAuditStatus", parameters);
    }

    function AddEditAuditType(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAuditType screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AuditType" type="msls.application.AuditType">
        /// Gets or sets the auditType for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAuditType.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAuditType", parameters);
    }

    function AddEditEmployee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employee" type="msls.application.Employee">
        /// Gets or sets the employee for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployee", parameters);
    }

    function AddEditFindingAction(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditFindingAction screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="FindingAction" type="msls.application.FindingAction">
        /// Gets or sets the findingAction for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditFindingAction.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditFindingAction", parameters);
    }

    function BrowseAllAuditFindings(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAllAuditFindings screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AuditFindings" type="msls.VisualCollection" elementType="msls.application.AuditFinding">
        /// Gets the auditFindings for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAllAuditFindings.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAllAuditFindings", parameters);
    }

    function BrowseAuditors(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAuditors screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Auditors" type="msls.VisualCollection" elementType="msls.application.Auditor">
        /// Gets the auditors for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAuditors.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAuditors", parameters);
    }

    function BrowseAudits(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAudits screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Audits" type="msls.VisualCollection" elementType="msls.application.Audit">
        /// Gets the audits for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAudits.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAudits", parameters);
    }

    function BrowseAuditStatuses(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAuditStatuses screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AuditStatuses" type="msls.VisualCollection" elementType="msls.application.AuditStatus">
        /// Gets the auditStatuses for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAuditStatuses.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAuditStatuses", parameters);
    }

    function BrowseAuditTypes(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAuditTypes screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AuditTypes" type="msls.VisualCollection" elementType="msls.application.AuditType">
        /// Gets the auditTypes for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAuditTypes.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAuditTypes", parameters);
    }

    function BrowseEmployees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Employees" type="msls.VisualCollection" elementType="msls.application.Employee">
        /// Gets the employees for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployees", parameters);
    }

    function BrowseMyAssignedAuditFindings(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyAssignedAuditFindings screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyAssignedAuditFindings" type="msls.VisualCollection" elementType="msls.application.AuditFinding">
        /// Gets the myAssignedAuditFindings for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyAssignedAuditFindings.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyAssignedAuditFindings", parameters);
    }

    function BrowseMyAuditFindingActions(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMyAuditFindingActions screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MyAuditFindingActions" type="msls.VisualCollection" elementType="msls.application.FindingAction">
        /// Gets the myAuditFindingActions for this screen.
        /// </field>
        /// <field name="Search" type="String">
        /// Gets or sets the search for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMyAuditFindingActions.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMyAuditFindingActions", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function MobileHome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileHome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileHome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileHome", parameters);
    }

    function MobileSettings(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MobileSettings screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.MobileSettings.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MobileSettings", parameters);
    }

    function Settings(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Settings screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Settings.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Settings", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditAudit: $defineScreen(AddEditAudit, [
            { name: "Audit", kind: "local", type: lightSwitchApplication.Audit },
            {
                name: "AuditAuditors", kind: "collection", elementType: lightSwitchApplication.AuditAuditor,
                getNavigationProperty: function () {
                    if (this.owner.Audit) {
                        return this.owner.Audit.details.properties.AuditAuditors;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Auditor").expand("Auditor.Employee");
                }
            },
            {
                name: "AuditFindings", kind: "collection", elementType: lightSwitchApplication.AuditFinding,
                getNavigationProperty: function () {
                    if (this.owner.Audit) {
                        return this.owner.Audit.details.properties.AuditFindings;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("AssignedTo");
                }
            }
        ], [
        ]),

        AddEditAuditAuditor: $defineScreen(AddEditAuditAuditor, [
            { name: "AuditAuditor", kind: "local", type: lightSwitchApplication.AuditAuditor }
        ], [
        ]),

        AddEditAuditFinding: $defineScreen(AddEditAuditFinding, [
            { name: "AuditFinding", kind: "local", type: lightSwitchApplication.AuditFinding },
            {
                name: "FindingAction", kind: "collection", elementType: lightSwitchApplication.FindingAction,
                getNavigationProperty: function () {
                    if (this.owner.AuditFinding) {
                        return this.owner.AuditFinding.details.properties.FindingAction;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("AssignedTo");
                }
            }
        ], [
        ]),

        AddEditAuditor: $defineScreen(AddEditAuditor, [
            { name: "Auditor", kind: "local", type: lightSwitchApplication.Auditor },
            {
                name: "AuditAuditors", kind: "collection", elementType: lightSwitchApplication.AuditAuditor,
                getNavigationProperty: function () {
                    if (this.owner.Auditor) {
                        return this.owner.Auditor.details.properties.AuditAuditors;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Audit");
                }
            }
        ], [
        ]),

        AddEditAuditStatus: $defineScreen(AddEditAuditStatus, [
            { name: "AuditStatus", kind: "local", type: lightSwitchApplication.AuditStatus }
        ], [
        ]),

        AddEditAuditType: $defineScreen(AddEditAuditType, [
            { name: "AuditType", kind: "local", type: lightSwitchApplication.AuditType }
        ], [
        ]),

        AddEditEmployee: $defineScreen(AddEditEmployee, [
            { name: "Employee", kind: "local", type: lightSwitchApplication.Employee }
        ], [
        ]),

        AddEditFindingAction: $defineScreen(AddEditFindingAction, [
            { name: "FindingAction", kind: "local", type: lightSwitchApplication.FindingAction }
        ], [
        ]),

        BrowseAllAuditFindings: $defineScreen(BrowseAllAuditFindings, [
            {
                name: "AuditFindings", kind: "collection", elementType: lightSwitchApplication.AuditFinding,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.AuditFindings.filter("(((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", CorrectiveAndPreventativeAction)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FindingDescription)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FindingImpactAssessment)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FindingReference)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ImmediateAction)") + "").expand("Audit").expand("AssignedTo");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseAuditors: $defineScreen(BrowseAuditors, [
            {
                name: "Auditors", kind: "collection", elementType: lightSwitchApplication.Auditor,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.Auditors.filter("(" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Employee/LastName)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", Employee/FirstName)") + ") or ((Created ne null) and (Created eq datetimeoffset'2013-11-04T00:00:00+00:00'))").orderBy("Employee/LastName").thenBy("Employee/FirstName").expand("Employee");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseAudits: $defineScreen(BrowseAudits, [
            {
                name: "Audits", kind: "collection", elementType: lightSwitchApplication.Audit,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.Audits.filter("((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AuditCode)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AuditDescription)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AuditStatus/AuditStatusDescription)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AuditType/AuditTypeDescription)") + "").orderByDescending("SchduledDate").expand("AuditType").expand("AuditStatus");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseAuditStatuses: $defineScreen(BrowseAuditStatuses, [
            {
                name: "AuditStatuses", kind: "collection", elementType: lightSwitchApplication.AuditStatus,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.AuditStatuses.filter("" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AuditStatusDescription)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseAuditTypes: $defineScreen(BrowseAuditTypes, [
            {
                name: "AuditTypes", kind: "collection", elementType: lightSwitchApplication.AuditType,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.AuditTypes.filter("" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", AuditTypeDescription)") + "").orderBy("AuditTypeDescription");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseEmployees: $defineScreen(BrowseEmployees, [
            {
                name: "Employees", kind: "collection", elementType: lightSwitchApplication.Employee,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.Employees.filter("(" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", LastName)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FirstName)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", UserName)") + "");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyAssignedAuditFindings: $defineScreen(BrowseMyAssignedAuditFindings, [
            {
                name: "MyAssignedAuditFindings", kind: "collection", elementType: lightSwitchApplication.AuditFinding,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.MyAssignedAuditFindings().filter("(((" + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", CorrectiveAndPreventativeAction)") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FindingDescription)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FindingImpactAssessment)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", FindingReference)") + ") or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ImmediateAction)") + "").expand("Audit").expand("AssignedTo");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        BrowseMyAuditFindingActions: $defineScreen(BrowseMyAuditFindingActions, [
            {
                name: "MyAuditFindingActions", kind: "collection", elementType: lightSwitchApplication.FindingAction,
                createQuery: function (searchParameter) {
                    return this.dataWorkspace.ApplicationData.MyAuditFindingActions().filter("" + ((searchParameter === undefined || searchParameter === null) ? "true" : "(Action eq " + $toODataString(searchParameter, "String?") + ")") + " or " + ((searchParameter === undefined || searchParameter === null) ? "true" : "substringof(" + $toODataString(searchParameter, "String?") + ", ActionComment)") + "").expand("AssignedTo");
                }
            },
            { name: "Search", kind: "local", type: String }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        MobileHome: $defineScreen(MobileHome, [
        ], [
        ]),

        MobileSettings: $defineScreen(MobileSettings, [
        ], [
        ]),

        Settings: $defineScreen(Settings, [
        ], [
        ]),

        showAddEditAudit: $defineShowScreen(function showAddEditAudit(Audit, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAudit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAudit", parameters, options);
        }),

        showAddEditAuditAuditor: $defineShowScreen(function showAddEditAuditAuditor(AuditAuditor, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAuditAuditor screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAuditAuditor", parameters, options);
        }),

        showAddEditAuditFinding: $defineShowScreen(function showAddEditAuditFinding(AuditFinding, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAuditFinding screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAuditFinding", parameters, options);
        }),

        showAddEditAuditor: $defineShowScreen(function showAddEditAuditor(Auditor, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAuditor screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAuditor", parameters, options);
        }),

        showAddEditAuditStatus: $defineShowScreen(function showAddEditAuditStatus(AuditStatus, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAuditStatus screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAuditStatus", parameters, options);
        }),

        showAddEditAuditType: $defineShowScreen(function showAddEditAuditType(AuditType, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAuditType screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAuditType", parameters, options);
        }),

        showAddEditEmployee: $defineShowScreen(function showAddEditEmployee(Employee, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployee", parameters, options);
        }),

        showAddEditFindingAction: $defineShowScreen(function showAddEditFindingAction(FindingAction, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditFindingAction screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditFindingAction", parameters, options);
        }),

        showBrowseAllAuditFindings: $defineShowScreen(function showBrowseAllAuditFindings(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAllAuditFindings screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAllAuditFindings", parameters, options);
        }),

        showBrowseAuditors: $defineShowScreen(function showBrowseAuditors(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAuditors screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAuditors", parameters, options);
        }),

        showBrowseAudits: $defineShowScreen(function showBrowseAudits(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAudits screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAudits", parameters, options);
        }),

        showBrowseAuditStatuses: $defineShowScreen(function showBrowseAuditStatuses(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAuditStatuses screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAuditStatuses", parameters, options);
        }),

        showBrowseAuditTypes: $defineShowScreen(function showBrowseAuditTypes(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAuditTypes screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAuditTypes", parameters, options);
        }),

        showBrowseEmployees: $defineShowScreen(function showBrowseEmployees(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployees", parameters, options);
        }),

        showBrowseMyAssignedAuditFindings: $defineShowScreen(function showBrowseMyAssignedAuditFindings(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyAssignedAuditFindings screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyAssignedAuditFindings", parameters, options);
        }),

        showBrowseMyAuditFindingActions: $defineShowScreen(function showBrowseMyAuditFindingActions(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMyAuditFindingActions screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMyAuditFindingActions", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showMobileHome: $defineShowScreen(function showMobileHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileHome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileHome", parameters, options);
        }),

        showMobileSettings: $defineShowScreen(function showMobileSettings(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MobileSettings screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MobileSettings", parameters, options);
        }),

        showSettings: $defineShowScreen(function showSettings(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Settings screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Settings", parameters, options);
        })

    });

}(msls.application));
