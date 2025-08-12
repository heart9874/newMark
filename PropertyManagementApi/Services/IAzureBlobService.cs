using System.Threading.Tasks;
using System.Collections.Generic;
using PropertyManagementApi;
public interface IAzureBlobService
{
    Task<List<Property>> GetPropertiesAsync();
}