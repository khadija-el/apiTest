using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api_angular.Models;

namespace api_angular.Models
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BlogsController: ControllerBase
    {
        protected readonly MyContext _context;
        public BlogsController(MyContext context)
        { 
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult>  GetAll()
        {
            var list = await _context.Blogs.ToListAsync();

            return Ok(list);
        }

         [HttpGet("{id}")]
        public async Task<IActionResult>  GetOne(int id)
        {
            var model = await _context.Blogs.FindAsync(id);

            return Ok(model);
        }
        
    }
}
