using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Text.Json;
using PropertyManagementApi;
using System;
public class AzureBlobService : IAzureBlobService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _configuration;
    private readonly ILogger<AzureBlobService> _logger;

    public AzureBlobService(HttpClient httpClient, IConfiguration configuration, ILogger<AzureBlobService> logger)
    {
        _httpClient = httpClient;
        _configuration = configuration;
        _logger = logger;
    }

    public async Task<List<Property>> GetPropertiesAsync()
    {
        try
        {
            var blobUrl = _configuration["AzureBlobStorage:Url"];
            var sasToken = _configuration["AzureBlobStorage:SasToken"];
            var fullUrl = $"{blobUrl}{sasToken}";

            var response = await _httpClient.GetAsync(fullUrl);
            response.EnsureSuccessStatusCode();

            var jsonContent = await response.Content.ReadAsStringAsync();
            var properties = JsonSerializer.Deserialize<List<Property>>(jsonContent, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return properties ?? new List<Property>();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching properties from Azure Blob Storage");
            throw;
        }
    }
}