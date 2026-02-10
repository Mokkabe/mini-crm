var builder = WebApplication.CreateBuilder(args);

// ======================
// Services
// ======================

// OpenAPI / Swagger
builder.Services.AddOpenApi();

var app = builder.Build();

// ======================
// Middleware
// ======================

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// ======================
// Root Endpoint
// ======================

app.MapGet("/", () =>
{
    return Results.Ok("MiniCrm.Api is running ✅");
});

// ======================
// Health Check Endpoint
// ======================

app.MapGet("/health", () =>
{
    return Results.Ok(new
    {
        status = "Healthy",
        timestamp = DateTime.UtcNow
    });
});

// ======================
// Demo Weather Endpoint
// ======================

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool",
    "Mild", "Warm", "Balmy", "Hot",
    "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast(
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();

    return forecast;
})
.WithName("GetWeatherForecast");

app.Run();

// ======================
// Records
// ======================

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
