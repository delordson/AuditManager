/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Audit, {
        /// <field>
        /// Called when a new audit is created.
        /// <br/>created(msls.application.Audit entity)
        /// </field>
        created: [lightSwitchApplication.Audit]
    });

    msls._addEntryPoints(lightSwitchApplication.AuditType, {
        /// <field>
        /// Called when a new auditType is created.
        /// <br/>created(msls.application.AuditType entity)
        /// </field>
        created: [lightSwitchApplication.AuditType]
    });

    msls._addEntryPoints(lightSwitchApplication.AuditStatus, {
        /// <field>
        /// Called when a new auditStatus is created.
        /// <br/>created(msls.application.AuditStatus entity)
        /// </field>
        created: [lightSwitchApplication.AuditStatus]
    });

    msls._addEntryPoints(lightSwitchApplication.Auditor, {
        /// <field>
        /// Called when a new auditor is created.
        /// <br/>created(msls.application.Auditor entity)
        /// </field>
        created: [lightSwitchApplication.Auditor]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.AuditAuditor, {
        /// <field>
        /// Called when a new auditAuditor is created.
        /// <br/>created(msls.application.AuditAuditor entity)
        /// </field>
        created: [lightSwitchApplication.AuditAuditor]
    });

    msls._addEntryPoints(lightSwitchApplication.AuditFinding, {
        /// <field>
        /// Called when a new auditFinding is created.
        /// <br/>created(msls.application.AuditFinding entity)
        /// </field>
        created: [lightSwitchApplication.AuditFinding]
    });

    msls._addEntryPoints(lightSwitchApplication.FindingAction, {
        /// <field>
        /// Called when a new findingAction is created.
        /// <br/>created(msls.application.FindingAction entity)
        /// </field>
        created: [lightSwitchApplication.FindingAction]
    });

}(msls.application));
