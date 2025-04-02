using System;
using System.Collections.Generic;

namespace ModelingAgency.Core.Models
{
    public enum ModelCategory
    {
        Established,
        NewFaces,
        Unique
    }

    public enum Gender
    {
        Male,
        Female
    }

    public class Model
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public Gender Gender { get; set; }
        public ModelCategory Category { get; set; }
        public string Height { get; set; }
        public string Bust { get; set; }
        public string Waist { get; set; }
        public string Hips { get; set; }
        public string ShoeSize { get; set; }
        public string HairColor { get; set; }
        public string EyeColor { get; set; }
        public string ProfileImage { get; set; }
        public List<ModelImage> Images { get; set; } = new List<ModelImage>();
        public DateTime DateAdded { get; set; } = DateTime.UtcNow;
        public bool IsActive { get; set; } = true;
    }
} 