using Microsoft.EntityFrameworkCore;
using MiniCrm.Api.Models;

namespace MiniCrm.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Lead> Leads => Set<Lead>();
}