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
    public class ProjetsController: ControllerBase
    {
        protected readonly MyContext _context;
        public ProjetsController(MyContext context)
        { 
            _context = context;
        }

        [HttpGet("{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}")]
        public virtual async Task<IActionResult> GetAll(int startIndex, int pageSize, string sortBy, string sortDir,string nom)
        {
            var list = await _context.Projets
                .Where(e=> nom == "*" ? true : e.Nom.Contains(nom))
                .OrderByName<Projet>(sortBy, sortDir == "desc")
                .Skip(startIndex)
                .Take(pageSize)
                .ToListAsync()
                ;
            int count = await _context.Set<Projet>().CountAsync();

            return Ok(new { list = list, count = count });
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Projet>>> GetOne()
        {
            return await _context.Projets.OrderByName<Projet>("Id").ToListAsync();
        }

         [HttpGet]
        public async Task<ActionResult<IEnumerable<Projet>>> Get()
        {
            return await _context.Projets.ToListAsync();
        }

        [HttpPost]
        public virtual async Task<ActionResult<Projet>> Post(Projet model)
        {
            _context.Projets.Add(model);

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
            var model = await _context.Projets.FindAsync(id);
            if (model == null)
            {
                return NotFound();
            }

            _context.Projets.Remove(model);
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
        public virtual async Task<IActionResult> Put([FromRoute] int id, [FromBody] Projet model)
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
