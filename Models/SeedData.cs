using System;
using System.Collections.Generic;
using Bogus;
using Microsoft.EntityFrameworkCore;

namespace api_angular.Models
{
    public static class DataSeeding
    {
        public static string lang = "fr";

        public static ModelBuilder Blogs(this ModelBuilder modelBuilder)
        {
            int id = 1;
            var faker = new Faker<Blog>(DataSeeding.lang)
                .CustomInstantiator(f => new Blog { Id = id++ })
                .RuleFor(o => o.Titre, f => f.Lorem.Word())
                ;
            modelBuilder.Entity<Blog>().HasData(faker.Generate(10));
            return modelBuilder;
        }
    }
}