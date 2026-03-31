using Microsoft.EntityFrameworkCore;
using MiniCrm.Api.Data;
using MiniCrm.Api.Models;  // ← neu

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

// EF Core + SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=minicrm.db"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendDev", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


var app = builder.Build();

// ======================
// Middleware
// ======================

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

//app.UseHttpsRedirection();

app.UseCors("FrontendDev");


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

// ======================
// Leads Endpoint (read-only demo)
// ======================

// GET alle Leads
app.MapGet("/api/leads", async (AppDbContext db) =>
{
    var leads = await db.Leads.ToListAsync();
    return Results.Ok(leads);
});

// POST neuen Lead erstellen
app.MapPost("/api/leads", async (AppDbContext db, Lead lead) =>
{
    db.Leads.Add(lead);
    await db.SaveChangesAsync();
    return Results.Created($"/api/leads/{lead.Id}", lead);
});

// DELETE Lead löschen
app.MapDelete("/api/leads/{id}", async (AppDbContext db, int id) =>
{
    var lead = await db.Leads.FindAsync(id);
    if (lead is null) return Results.NotFound();

    db.Leads.Remove(lead);
    await db.SaveChangesAsync();
    return Results.NoContent();
});


app.Run();

// ======================
// Records
// ======================

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
