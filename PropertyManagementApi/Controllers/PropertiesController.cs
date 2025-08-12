using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System;
using System.Net.Http;
[ApiController]
[Route("api/[controller]")]
public class PropertiesController : ControllerBase
{
    private readonly IAzureBlobService _blobService;
    private readonly ILogger<PropertiesController> _logger;

    public PropertiesController(IAzureBlobService blobService, ILogger<PropertiesController> logger)
    {
        _blobService = blobService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> GetProperties()
    {
        try
        {
            var properties = await _blobService.GetPropertiesAsync();
            return Ok(properties);
        }
        catch (HttpRequestException ex)
        {
            _logger.LogError(ex, "Error accessing Azure Blob Storage");
            return StatusCode(StatusCodes.Status503ServiceUnavailable, "Unable to access data storage");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unexpected error fetching properties");
            return StatusCode(StatusCodes.Status500InternalServerError, "An unexpected error occurred");
        }
    }
}