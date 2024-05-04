namespace HomeWorkFull
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string Origin = "MyAllowSpecificOrigins";

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: Origin,
                    corsBuilder =>
                    {
                        corsBuilder.WithOrigins(builder.Configuration.GetSection("CORS:Origins").Get<string[]>())
                        .WithHeaders(builder.Configuration.GetSection("CORS:Headers").Get<string[]>())
                        .WithMethods(builder.Configuration.GetSection("CORS:Methods").Get<string[]>());
                    });
            });

            builder.Services.AddControllers();
            builder.Services.AddWindowsService();
            //builder.Services.AddSpaStaticFiles(configuration =>
            //{
            //    configuration.RootPath = "ClientApp";
            //});

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            //app.UseSpaStaticFiles();

            app.UseCors(Origin);

            //app.UseSpa(spa =>
            //{
            //    spa.Options.SourcePath = "ClientApp";
            //});

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
