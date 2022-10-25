using Converter.Protos;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using ILogger = Serilog.ILogger;
using System;
using System.Threading.Tasks;
using System.IO;
using Google.Protobuf;

namespace Converter.Services
{
    public class FileConverterServiceImpl : FileConverter.FileConverterBase, IFileConverterServiceImpl
    {
        private readonly ILogger _logger;
        private static readonly RequestMetadata emptyRequestMetadata = new();
        private static readonly ResponseMetadata emptyResponseMetadata = new();

        public FileConverterServiceImpl(ILogger logger)
        {
            Console.WriteLine("FileConverterServiceImpl Initialized");
            _logger = logger;
        }

        /* public override Task<ConverterFromBytesResponse> ConvertFromBytes(ConverterFromBytesRequest request, ServerCallContext context)
         {
             ConverterFromBytesResponse response = new ConverterFromBytesResponse();


                     String fileName = "mypdf.html";
                     Byte[] data = File.ReadAllBytes(fileName);

                     MemoryStream stream = new MemoryStream(data);
                     ByteString byteData = ByteString.FromStream(stream);
                     response.ByteStream = byteData; 


                  String fileName = "mypdf.html";
                  Byte[] data = File.ReadAllBytes(fileName);

                  ByteString dataString = ByteString.FromBase64(String.Join("", data));
                  response.ByteStream = dataString; 


                   Console.WriteLine(request.ByteStream.Length);
                   Metadata trailer = new Metadata
                   {
                       { "MetaDataItem", "MetaDataValue" }
                   };
                   Status status = new Status(StatusCode.Cancelled, "Cancelled , your ur ass hole");
                   throw new RpcException(status,trailer,"Some message");
             }

             return Task.FromResult();
         }
 */
        public override Task<ConverterFromBytesResponse> ConvertFromBytes(ConverterFromBytesRequest request, ServerCallContext context)
        {
            _logger.Information("ConvertFromBytes Service");
            _logger.Information($"Message {request.Metadata.Msg}");
            _logger.Information($"Attributes {request.Metadata.Attributes}");
            String fileName = "Krishna";
            ConverterFromBytesResponse response = new();

            Byte[] data = request.ByteStream.Memory.ToArray();
            InputFileFormat inputFileFormat = request.Infileformat;
            OutputFileFormat outputFileFormat = request.OutfileFormat;

            Utility.CreateFile(fileName,data,inputFileFormat);

            Utility.CreateExpectedFile(fileName, inputFileFormat, outputFileFormat);

            String outfileName = String.Join(".", fileName, Utility.GetExtForOutputFile(outputFileFormat));
            Byte[] dataRead = File.ReadAllBytes(outfileName);

            File.Delete(outfileName);

            response.ByteStream = ByteString.FromStream(new MemoryStream(dataRead));
            response.Metadata = emptyResponseMetadata;

            return Task.FromResult(response);
        }

        public override Task<ConverterFromLinkResponse> ConvertFromLink(ConverterFromLinkRequest request, ServerCallContext context)
        {
            _logger.Information("ConvertFromLink Service");
            _logger.Information($"Message {request.Metadata.Msg}");
            _logger.Information($"Attributes {request.Metadata.Attributes}");

            ConverterFromLinkResponse response = new();
            return Task.FromResult(response);
        }

        public override Task<DecompressAndConvertFromBytesResponse> DecompressAndConvertFromBytes(DecompressAndConvertFromBytesRequest request, ServerCallContext context)
        {
            _logger.Information("DecompressAndConvertFromBytes Service");
            _logger.Information($"Message {request.Metadata.Msg}");
            _logger.Information($"Attributes {request.Metadata.Attributes}");

            DecompressAndConvertFromBytesResponse response = new();

            Byte[] data = request.ByteStream.Memory.ToArray();
            InputFileFormat inputFileFormat = request.Infileformat;
            OutputFileFormat outputFileFormat = request.OutfileFormat;
            String fileName = request.Name;
            CompressFileFormat compressFileFormat = request.Incompressformat;

            String myzipName = "Ganesh";
            String ofileName = String.Join(".", fileName, Utility.GetExtForInputFile(inputFileFormat));

            Utility.CreateZipFile(myzipName,compressFileFormat,data);
            String zipFileName = String.Join(".", myzipName, Utility.GetExtForCompressedFile(compressFileFormat));

            Utility.UnZipFileAndReadContent(zipFileName,compressFileFormat,ofileName);

            Utility.CreateExpectedFile(ofileName, inputFileFormat, outputFileFormat);

            String outfileName = String.Join(".", fileName, Utility.GetExtForOutputFile(outputFileFormat));
            Byte[] dataRead = File.ReadAllBytes(outfileName);

            File.Delete(outfileName);

            response.ByteStream = ByteString.FromStream(new MemoryStream(dataRead));
            response.Metadata = emptyResponseMetadata;

            return Task.FromResult(response);
        }

        public override Task<CheckForFormatResponse> CheckForFormat(CheckForFormatRequest request, ServerCallContext context)
        {
            _logger.Information("CheckForFormat Service");
            _logger.Information($"Message {request.Metadata.Msg}");
            _logger.Information($"Attributes {request.Metadata.Attributes}");

            CheckForFormatResponse response = new();
            int index = Array.FindIndex((OutputFileFormat[])Enum.GetValues(typeof(OutputFileFormat)), x => Enum.GetName(typeof(OutputFileFormat), x) == request.Format);
            response.Status = index >= 1 ? true : false;
            return Task.FromResult(response);
        }

        public override Task<SupportedFormatsResponse> SupportedFormats(SupportedFormatsRequest request, ServerCallContext context)
        {
            _logger.Information($"SupportedFormats Service");
            _logger.Information($"Message {request.Metadata.Msg}");
            _logger.Information($"Attributes {request.Metadata.Attributes}");

            SupportedFormatsResponse response = new();
            foreach (InputFileFormat fileFormat in Enum.GetValues(typeof(InputFileFormat)))
            {
                if (fileFormat != 0)
                {
                    response.InFormats.Add(fileFormat.ToString().Substring(2));
                }
            }

            foreach (OutputFileFormat fileFormat in Enum.GetValues(typeof(OutputFileFormat)))
            {
                if (fileFormat != 0)
                {
                    response.OutFormats.Add(fileFormat.ToString().Substring(3));
                }

            }
            return Task.FromResult(response);
        }

    }
}
