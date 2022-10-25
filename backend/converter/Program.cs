using Converter.Protos;
using Converter.Services;
using Grpc.Core;
using System;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using System.IO;
using Serilog;
using Microsoft.Extensions.DependencyInjection;
using ILogger = Serilog.ILogger;

namespace Converter
{
    public class Program
    {
        public static void Main(string[] args)
        {
            ConfigurationBuilder builder = new();
            BuildConfig(builder);

            Log.Logger = new LoggerConfiguration()
                .Enrich.FromLogContext()
                .ReadFrom.Configuration(builder.Build())
                .WriteTo.Console()
                .CreateLogger();

            var host = Host.CreateDefaultBuilder()
                .ConfigureServices((context, services) =>
                {
                    services.AddTransient<IFileConverterServiceImpl,FileConverterServiceImpl>();
                })
                .UseSerilog()
                .Build();

            // var service = ActivatorUtilities.CreateInstance<FileConverterServiceImpl>(host.Services);

            ILogger logger = Log.Logger;
            Console.WriteLine("Application Started");
            Server server = new()
            {
                Services = { FileConverter.BindService(new FileConverterServiceImpl(logger)) },
                Ports = { new ServerPort("localhost", 4000, ServerCredentials.Insecure) }
            };

            Console.WriteLine("Server Listening in port 4000");
            server.Start();
            Task.Delay(new TimeSpan(0, 2,0)).ContinueWith(t =>
            {
                Console.WriteLine("Server Ended");
                server.ShutdownAsync().Wait();
            }).GetAwaiter().GetResult();
            Console.ReadLine();
        }

        public static void BuildConfig (ConfigurationBuilder builder)
        {
            try
            {
                builder.SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                    .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("CONVERTER_UNPAID") ?? "production"}.json", optional: true, reloadOnChange: true)
                    .AddEnvironmentVariables()
                    .AddUserSecrets<Program>();
            }
            catch (Exception e)
            {
                Console.WriteLine($"Message : {e.Message}\nStackTrace : {e.StackTrace}");
            }
        }

    }
}
