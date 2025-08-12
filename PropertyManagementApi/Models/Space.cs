using System.Collections.Generic;

namespace PropertyManagementApi
{
    public class Space
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public List<RentRoll>? RentRoll { get; set; }
    }
}
