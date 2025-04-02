using System;

namespace ModelingAgency.Core.Models
{
    public class ModelImage
    {
        public int Id { get; set; }
        public int ModelId { get; set; }
        public Model Model { get; set; }
        public string ImageUrl { get; set; }
        public bool IsFeatured { get; set; }
        public DateTime DateAdded { get; set; } = DateTime.UtcNow;
    }
} 