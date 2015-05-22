using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class AuditFinding
    {
        partial void FindingDate_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            if (this.FindingDate != null & this.Audit.DateStarted != null)
            {
                if (this.FindingDate < this.Audit.DateStarted)
                {
                    results.AddPropertyError("Aa audit finding date cannot be earlier than the audit start date");
                }
            }
        }
    }
}
