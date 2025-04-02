using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ModelingAgency.Core.Models;

namespace ModelingAgency.API.Data.Repositories
{
    public class ModelRepository
    {
        private readonly ModelingAgencyContext _context;

        public ModelRepository(ModelingAgencyContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Model>> GetAllModelsAsync()
        {
            return await _context.Models
                .Include(m => m.Images)
                .ToListAsync();
        }

        public async Task<IEnumerable<Model>> GetModelsByCategoryAsync(ModelCategory category)
        {
            return await _context.Models
                .Include(m => m.Images)
                .Where(m => m.Category == category)
                .ToListAsync();
        }

        public async Task<IEnumerable<Model>> GetModelsByGenderAsync(Gender gender)
        {
            return await _context.Models
                .Include(m => m.Images)
                .Where(m => m.Gender == gender)
                .ToListAsync();
        }

        public async Task<IEnumerable<Model>> GetModelsByGenderAndCategoryAsync(Gender gender, ModelCategory category)
        {
            return await _context.Models
                .Include(m => m.Images)
                .Where(m => m.Gender == gender && m.Category == category)
                .ToListAsync();
        }

        public async Task<Model> GetModelByIdAsync(int id)
        {
            return await _context.Models
                .Include(m => m.Images)
                .FirstOrDefaultAsync(m => m.Id == id);
        }
    }
} 