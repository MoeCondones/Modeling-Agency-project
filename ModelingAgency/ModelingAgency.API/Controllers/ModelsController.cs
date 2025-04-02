using Microsoft.AspNetCore.Mvc;
using ModelingAgency.API.Data.Repositories;
using ModelingAgency.Core.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ModelingAgency.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModelsController : ControllerBase
    {
        private readonly ModelRepository _modelRepository;

        public ModelsController(ModelRepository modelRepository)
        {
            _modelRepository = modelRepository;
        }

        // GET: api/models
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Model>>> GetAllModels()
        {
            var models = await _modelRepository.GetAllModelsAsync();
            return Ok(models);
        }

        // GET: api/models/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Model>> GetModelById(int id)
        {
            var model = await _modelRepository.GetModelByIdAsync(id);
            
            if (model == null)
            {
                return NotFound();
            }

            return Ok(model);
        }

        // GET: api/models/gender/male
        [HttpGet("gender/{gender}")]
        public async Task<ActionResult<IEnumerable<Model>>> GetModelsByGender(string gender)
        {
            if (!Enum.TryParse<Gender>(gender, true, out var genderEnum))
            {
                return BadRequest("Invalid gender specified");
            }

            var models = await _modelRepository.GetModelsByGenderAsync(genderEnum);
            return Ok(models);
        }

        // GET: api/models/category/established
        [HttpGet("category/{category}")]
        public async Task<ActionResult<IEnumerable<Model>>> GetModelsByCategory(string category)
        {
            if (!Enum.TryParse<ModelCategory>(category, true, out var categoryEnum))
            {
                return BadRequest("Invalid category specified");
            }

            var models = await _modelRepository.GetModelsByCategoryAsync(categoryEnum);
            return Ok(models);
        }

        // GET: api/models/filter?gender=male&category=established
        [HttpGet("filter")]
        public async Task<ActionResult<IEnumerable<Model>>> GetFilteredModels([FromQuery] string gender, [FromQuery] string category)
        {
            if (!Enum.TryParse<Gender>(gender, true, out var genderEnum))
            {
                return BadRequest("Invalid gender specified");
            }

            if (!Enum.TryParse<ModelCategory>(category, true, out var categoryEnum))
            {
                return BadRequest("Invalid category specified");
            }

            var models = await _modelRepository.GetModelsByGenderAndCategoryAsync(genderEnum, categoryEnum);
            return Ok(models);
        }
    }
} 