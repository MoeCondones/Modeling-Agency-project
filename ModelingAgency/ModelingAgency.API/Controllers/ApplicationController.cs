using Microsoft.AspNetCore.Mvc;
using ModelingAgency.API.Data.Repositories;
using ModelingAgency.Core.Models;
using System.Threading.Tasks;

namespace ModelingAgency.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        private readonly ApplicationRepository _applicationRepository;

        public ApplicationController(ApplicationRepository applicationRepository)
        {
            _applicationRepository = applicationRepository;
        }

        // POST: api/application
        [HttpPost]
        public async Task<ActionResult<Application>> SubmitApplication(Application application)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var submittedApplication = await _applicationRepository.SubmitApplicationAsync(application);
            return CreatedAtAction(nameof(SubmitApplication), new { id = submittedApplication.Id }, submittedApplication);
        }
    }
} 