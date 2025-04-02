using Microsoft.EntityFrameworkCore;
using ModelingAgency.Core.Models;

namespace ModelingAgency.API.Data
{
    public class ModelingAgencyContext : DbContext
    {
        public ModelingAgencyContext(DbContextOptions<ModelingAgencyContext> options)
            : base(options)
        {
        }

        public DbSet<Model> Models { get; set; }
        public DbSet<ModelImage> ModelImages { get; set; }
        public DbSet<Application> Applications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure relationships
            modelBuilder.Entity<ModelImage>()
                .HasOne(mi => mi.Model)
                .WithMany(m => m.Images)
                .HasForeignKey(mi => mi.ModelId)
                .OnDelete(DeleteBehavior.Cascade);

            // Seed initial data for testing
            SeedData(modelBuilder);
        }

        private void SeedData(ModelBuilder modelBuilder)
        {
            // Seed male models
            modelBuilder.Entity<Model>().HasData(
                new Model { 
                    Id = 1, 
                    Name = "James Wilson", 
                    Age = 27, 
                    Gender = Gender.Male, 
                    Category = ModelCategory.Established,
                    Height = "6'2\"",
                    Waist = "32\"",
                    ShoeSize = "11",
                    HairColor = "Brown",
                    EyeColor = "Blue",
                    ProfileImage = "/images/models/male/james_profile.jpg" 
                },
                new Model { 
                    Id = 2, 
                    Name = "Michael Chen", 
                    Age = 23, 
                    Gender = Gender.Male, 
                    Category = ModelCategory.NewFaces,
                    Height = "6'0\"",
                    Waist = "30\"",
                    ShoeSize = "10",
                    HairColor = "Black",
                    EyeColor = "Brown",
                    ProfileImage = "/images/models/male/michael_profile.jpg" 
                },
                new Model { 
                    Id = 3, 
                    Name = "Tomas Rodriguez", 
                    Age = 25, 
                    Gender = Gender.Male, 
                    Category = ModelCategory.Unique,
                    Height = "6'1\"",
                    Waist = "31\"",
                    ShoeSize = "11.5",
                    HairColor = "Black",
                    EyeColor = "Green",
                    ProfileImage = "/images/models/male/tomas_profile.jpg" 
                }
            );

            // Seed female models
            modelBuilder.Entity<Model>().HasData(
                new Model { 
                    Id = 4, 
                    Name = "Sofia Petrova", 
                    Age = 24, 
                    Gender = Gender.Female, 
                    Category = ModelCategory.Established,
                    Height = "5'11\"",
                    Bust = "34\"",
                    Waist = "24\"",
                    Hips = "34\"",
                    ShoeSize = "9",
                    HairColor = "Blonde",
                    EyeColor = "Blue",
                    ProfileImage = "/images/models/female/sofia_profile.jpg" 
                },
                new Model { 
                    Id = 5, 
                    Name = "Zara Williams", 
                    Age = 21, 
                    Gender = Gender.Female, 
                    Category = ModelCategory.NewFaces,
                    Height = "5'10\"",
                    Bust = "32\"",
                    Waist = "24\"",
                    Hips = "35\"",
                    ShoeSize = "8",
                    HairColor = "Brown",
                    EyeColor = "Hazel",
                    ProfileImage = "/images/models/female/zara_profile.jpg" 
                },
                new Model { 
                    Id = 6, 
                    Name = "Amara Okonkwo", 
                    Age = 23, 
                    Gender = Gender.Female, 
                    Category = ModelCategory.Unique,
                    Height = "5'9\"",
                    Bust = "33\"",
                    Waist = "23\"",
                    Hips = "35\"",
                    ShoeSize = "8.5",
                    HairColor = "Black",
                    EyeColor = "Brown",
                    ProfileImage = "/images/models/female/amara_profile.jpg" 
                }
            );

            // Seed model images
            modelBuilder.Entity<ModelImage>().HasData(
                // James Wilson images
                new ModelImage { Id = 1, ModelId = 1, ImageUrl = "/images/models/male/james_1.jpg", IsFeatured = true },
                new ModelImage { Id = 2, ModelId = 1, ImageUrl = "/images/models/male/james_2.jpg", IsFeatured = false },
                
                // Michael Chen images
                new ModelImage { Id = 3, ModelId = 2, ImageUrl = "/images/models/male/michael_1.jpg", IsFeatured = true },
                new ModelImage { Id = 4, ModelId = 2, ImageUrl = "/images/models/male/michael_2.jpg", IsFeatured = false },
                
                // Tomas Rodriguez images
                new ModelImage { Id = 5, ModelId = 3, ImageUrl = "/images/models/male/tomas_1.jpg", IsFeatured = true },
                new ModelImage { Id = 6, ModelId = 3, ImageUrl = "/images/models/male/tomas_2.jpg", IsFeatured = false },
                
                // Sofia Petrova images
                new ModelImage { Id = 7, ModelId = 4, ImageUrl = "/images/models/female/sofia_1.jpg", IsFeatured = true },
                new ModelImage { Id = 8, ModelId = 4, ImageUrl = "/images/models/female/sofia_2.jpg", IsFeatured = false },
                
                // Zara Williams images
                new ModelImage { Id = 9, ModelId = 5, ImageUrl = "/images/models/female/zara_1.jpg", IsFeatured = true },
                new ModelImage { Id = 10, ModelId = 5, ImageUrl = "/images/models/female/zara_2.jpg", IsFeatured = false },
                
                // Amara Okonkwo images
                new ModelImage { Id = 11, ModelId = 6, ImageUrl = "/images/models/female/amara_1.jpg", IsFeatured = true },
                new ModelImage { Id = 12, ModelId = 6, ImageUrl = "/images/models/female/amara_2.jpg", IsFeatured = false }
            );
        }
    }
} 