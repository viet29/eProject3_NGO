//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace eProject3_User.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Disbursement
    {
        public int DisbursementId { get; set; }
        public int ProjectId { get; set; }
        public System.DateTime Date { get; set; }
        public int AmountSpend { get; set; }
    
        public virtual Project Project { get; set; }
    }
}