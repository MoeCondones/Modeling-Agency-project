using System.Threading.Tasks;
using ModelingAgency.Core.Models;

namespace ModelingAgency.API.Data.Repositories
{
    public class ApplicationRepository
    {
        private readonly ModelingAgencyContext _context;

        public ApplicationRepository(ModelingAgencyContext context)
        {
            _context = context;
        }

        public async Task<Application> SubmitApplicationAsync(Application application)
        {
            _context.Applications.Add(application);
            await _context.SaveChangesAsync();
            return application;
        }
    }
} 