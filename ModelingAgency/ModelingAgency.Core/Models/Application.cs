using System;

namespace ModelingAgency.Core.Models
{
    public class Application
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public int Age { get; set; }
        public Gender Gender { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Height { get; set; }
        public string Experience { get; set; }
        public string InstagramHandle { get; set; }
        public string PhotoUrl { get; set; }
        public DateTime SubmissionDate { get; set; } = DateTime.UtcNow;
        public bool Reviewed { get; set; } = false;
    }
} 