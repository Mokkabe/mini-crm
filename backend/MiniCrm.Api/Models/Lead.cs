namespace MiniCrm.Api.Models;

public class Lead
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Status { get; set; } = "New"; // New, Contacted, Closed
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}