using Microsoft.EntityFrameworkCore;

namespace api_angular.Models
{
    public partial class MyContext : DbContext
    {
         public virtual DbSet<Blog> Blogs { get; set; } 
         public virtual DbSet<Projet> Projets { get; set; } 
        public MyContext(DbContextOptions<MyContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
           modelBuilder.Blogs();
           modelBuilder.Projets();
                     
       }
   }
}