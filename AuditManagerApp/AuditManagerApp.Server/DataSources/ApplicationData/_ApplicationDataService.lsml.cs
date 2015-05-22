using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using LightSwitchApplication.UserCode;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void MyAuditFindingActions_PreprocessQuery(ref IQueryable<FindingAction> query)
        {
            query = from finding in query
                    where finding.AssignedTo.UserName == this.Application.User.Name
                    select finding;
        }

        partial void MyAssignedAuditFindings_PreprocessQuery(ref IQueryable<AuditFinding> query)
        {
            query = from finding in query
                    where finding.AssignedTo.UserName == this.Application.User.Name
                    select finding;
        }

        partial void AuditFindings_Inserted(AuditFinding entity)
        {
            if (entity.AssignedTo.Email != string.Empty)
            {
                string subject = "New Audit Finding Assigned to you";

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following audit finding has been assigned to you for resolution:<br></br>Audit Code: {2}.<br></br>Audit Description: {3}.<br></br>Finding Reference: {4}.<br></br>Finding Description: {5}<br></br></p></body></html>", entity.AssignedTo.FirstName, entity.AssignedTo.LastName, entity.Audit.AuditCode, entity.Audit.AuditDescription, entity.FindingReference, entity.FindingDescription);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.AssignedTo.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        partial void FindingActions_Inserted(FindingAction entity)
        {
            if (entity.AssignedTo.Email != string.Empty)
            {
                string subject = "New Audit Finding Action Assigned to you";

                string message = string.Format("<html><body>Dear {0} {1}.<br></br><p>The following audit finding action has been assigned to you for completion:<br></br>Action:<br></br>{2}<br></br><br></br>Audit Code: {3}.<br></br>Audit Description: {4}.<br></br>Finding Reference: {5}.<br></br>Finding Description: {6}<br></br></p></body></html>", entity.AssignedTo.FirstName, entity.AssignedTo.LastName, entity.Action, entity.AuditFinding.Audit.AuditCode, entity.AuditFinding.Audit.AuditDescription, entity.AuditFinding.FindingReference, entity.AuditFinding.FindingDescription);

                List<string> mailTos = new List<string>();

                mailTos.Add(entity.AssignedTo.Email);

                SendEmail(mailTos, subject, message);
            }
        }

        private void SendEmail(List<string> mailTos, string subject, string message)
        {
            if (System.Net.NetworkInformation.NetworkInterface.GetIsNetworkAvailable())
            {
                if (mailTos.Count() != 0)
                {
                    MailHelper mailHelper = new MailHelper();

                    mailHelper.SendMail(mailTos, subject, message);
                }
            }
        }

        partial void Audits_Validate(Audit entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateCompleted != null & entity.DateStarted != null)
            {
                if (entity.DateCompleted < entity.DateStarted)
                {
                    results.AddEntityError("An audit cannot be completed before it has started");
                }
            }
        }

        partial void AuditFindings_Validate(AuditFinding entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.DateFindingClosed != null & entity.FindingDate != null)
            {
                if (entity.DateFindingClosed < entity.FindingDate)
                {
                    results.AddEntityError("An audit finding cannot be closed before it is opened");
                }
            }
        }

        partial void FindingActions_Validate(FindingAction entity, EntitySetValidationResultsBuilder results)
        {
            if (entity.ActionTargetCompletionDate != null & entity.DateActionAssigned != null)
            {
                if (entity.ActionTargetCompletionDate < entity.DateActionAssigned)
                {
                    results.AddEntityError("An audit finding action cannot have a target date earlier than the assigned date");
                }
            }

            if (entity.ActionTargetCompletionDate != null & entity.DateActionAssigned != null)
            {
                if (entity.DateActionCompleted < entity.DateActionAssigned)
                {
                    results.AddEntityError("An audit finding action cannot be completed before it is assigned");
                }
            }
        }

        partial void AuditAuditors_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditAuditors);
        }

        partial void AuditAuditors_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditAuditors);
        }

        partial void AuditAuditors_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditAuditors);
        }

        partial void AuditFindings_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditFindings);
        }

        partial void AuditFindings_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditFindings);
        }

        partial void AuditFindings_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditFindings);
        }

        partial void Auditors_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditors);
        }

        partial void Auditors_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditors);
        }

        partial void Auditors_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditors);
        }

        partial void Audits_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAudits);
        }

        partial void Audits_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAudits);
        }

        partial void Audits_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAudits);
        }

        partial void AuditStatuses_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditStatuses);
        }

        partial void AuditStatuses_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditStatuses);
        }

        partial void AuditStatuses_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditStatuses);
        }

        partial void AuditTypes_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditTypes);
        }

        partial void AuditTypes_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditTypes);
        }

        partial void AuditTypes_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditAuditTypes);
        }

        partial void Employees_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void Employees_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditEmployees);
        }

        partial void FindingActions_CanDelete(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditFindingActions);
        }

        partial void FindingActions_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditFindingActions);
        }

        partial void FindingActions_CanUpdate(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.CanEditFindingActions);
        }

    }
}
