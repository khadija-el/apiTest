using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api_angular.Models;
using System.Linq;
using System.Collections.Generic;

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

        
        [HttpGet("{startIndex}/{pageSize}/{sortBy}/{sortDir}/{titre}")]
        public virtual async Task<IActionResult> GetAll(int startIndex, int pageSize, string sortBy, string sortDir,string titre)
        {
            var list = await _context.Blogs
                .Where(e=> titre == "*" ? true : e.Titre.Contains(titre))
                .OrderByName<Blog>(sortBy, sortDir == "desc")
                .Skip(startIndex)
                .Take(pageSize)
                .ToListAsync()
                ;
            int count = await _context.Set<Blog>().CountAsync();

            return Ok(new { list = list, count = count });
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Blog>>> Get()
        {
            return await _context.Blogs.OrderByName<Blog>("Id").ToListAsync();
        }


        [HttpPost]
        public virtual async Task<ActionResult<Blog>> Post(Blog model)
        {
            _context.Blogs.Add(model);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

            return Created("", model);
        }

        [HttpDelete("{id}")]
        public virtual async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Blogs.FindAsync(id);
            if (model == null)
            {
                return NotFound();
            }

            _context.Blogs.Remove(model);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

            return Accepted();
        }


        [HttpPut("{id}")]
        public virtual async Task<IActionResult> Put([FromRoute] int id, [FromBody] Blog model)
        {

            _context.Entry(model).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

            return NoContent();
        }
        
    }
}
