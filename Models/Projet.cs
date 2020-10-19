using System;
using System.Collections.Generic;

namespace api_angular.Models
{
    public class Projet
    {
        public Projet()
        {
            
        }
        public int Id { get; set; }
        public string Nom { get; set; }
        public string ImageUrl { get; set; }
        public DateTime Date { get; set; }
        public string Git { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public string Technologie { get; set; }
    }
}