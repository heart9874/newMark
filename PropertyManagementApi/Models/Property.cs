using System.Collections.Generic;

namespace PropertyManagementApi
{
    public class Property
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public List<string>? Features { get; set; }
        public List<string>? Highlights { get; set; }
        public List<string>? Transportation { get; set; }
        public List<Space>? Spaces { get; set; }
    }
}
