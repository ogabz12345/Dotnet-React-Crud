
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActicities() {
            return await _context.Activities.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActicity(Guid id) {
            return await _context.Activities.FindAsync(id);
        }

    }
}