using Converter.Protos;
using System;
using System.IO;
using ICSharpCode.SharpZipLib;
using ICSharpCode.SharpZipLib.Tar;
using ICSharpCode.SharpZipLib.Zip;
using System.IO.Compression;
using Microsoft.AspNetCore.Builder;

namespace Converter
{
    public class Utility
    {
        public static void CreateFile(string fileName, Byte[] data, InputFileFormat fileFormat)
        {
            try
            {
                File.WriteAllBytes(String.Join(".", fileName, GetExtForInputFile(fileFormat)), data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

        public static String GetExtForInputFile(InputFileFormat fileFormat)
        {
            var value = fileFormat switch
            {
                InputFileFormat.NotValidInputFormat => "",
                InputFileFormat.InPdf => "pdf",
                InputFileFormat.InBiblatex => "bib",
                InputFileFormat.InBibtex => "bib",
                InputFileFormat.InCommonmark => "md",
                InputFileFormat.InCsljson => "csl",
                InputFileFormat.InCsv => "csv",
                InputFileFormat.InDocbook => "dbk",
                InputFileFormat.InDocx => "docx",
                InputFileFormat.InEpub => "epub",
                InputFileFormat.InHtml => "html",
                InputFileFormat.InIpynb => "ipynb",
                InputFileFormat.InJson => "json",
                InputFileFormat.InLatex => "tex",
                InputFileFormat.InMan => "man",
                InputFileFormat.InMarkdown => "md",
                InputFileFormat.InMarkdownGithub => "md",
                InputFileFormat.InMarkdownMmd => "md",
                InputFileFormat.InMarkdownPhpextra => "md",
                InputFileFormat.InMarkdownStrict => "md",
                InputFileFormat.InMediawiki => " mediawiki",
                InputFileFormat.InRtf => "rtf",
                InputFileFormat.InTikiwiki => " tikiwiki",
                InputFileFormat.InTwiki => "twiki",
                InputFileFormat.InVimwiki => "vimwiki",
                _ => throw new ArgumentException("Unsupported file extension"),
            };

            return value;
        }

        public static String GetExtForOutputFile(OutputFileFormat outputFile)
        {
            var value = outputFile switch
            {
                OutputFileFormat.NotValidOutputFormat => throw new ArgumentException(),
                OutputFileFormat.OutBiblatex => "bib",
                OutputFileFormat.OutBibtex => "bib",
                OutputFileFormat.OutCommonmark => "md",
                OutputFileFormat.OutCommonmarkX => "md",
                OutputFileFormat.OutCsljson => "csl",
                OutputFileFormat.OutDocbook => " dbk",
                OutputFileFormat.OutDocbook4 => "dbk",
                OutputFileFormat.OutDocbook5 => "dbk",
                OutputFileFormat.OutDocx => "docx",
                OutputFileFormat.OutEpub => "epub",
                OutputFileFormat.OutEpub2 => "epub",
                OutputFileFormat.OutEpub3 => "epub",
                OutputFileFormat.OutHtml => "html",
                OutputFileFormat.OutHtml4 => "html",
                OutputFileFormat.OutHtml5 => "html",
                OutputFileFormat.OutIpynb => "ipynb",
                OutputFileFormat.OutJson => "json",
                OutputFileFormat.OutLatex => "tex",
                OutputFileFormat.OutMan => "man",
                OutputFileFormat.OutMarkdown => "md",
                OutputFileFormat.OutMarkdownGithub => "md",
                OutputFileFormat.OutMarkdownMmd => "md",
                OutputFileFormat.OutMarkdownPhpextra => "md",
                OutputFileFormat.OutMarkdownStrict => "md",
                OutputFileFormat.OutMediawiki => "mediawiki",
                OutputFileFormat.OutPdf => "pdf",
                OutputFileFormat.OutPlain => "plain",
                OutputFileFormat.OutPptx => "pptx",
                OutputFileFormat.OutRtf => "rtf",
                OutputFileFormat.OutXwiki => "xwiki",
                OutputFileFormat.OutZimwiki => "zim",
                OutputFileFormat.OutImage => "png",
                _ => throw new ArgumentException("Unsupported file extension"),
            };

            return value; 
        }

        public static String GetExtForCompressedFile(CompressFileFormat fileFormat)
        {
            var value = fileFormat switch
            {
                CompressFileFormat.Tar => "tar",
                CompressFileFormat.Zip => "zip",
                _ => throw new ArgumentException("Unsupported file extension"),
            };

            return value;
        }


        public static void CreateZipFile(string fileName, CompressFileFormat compressFileFormat, Byte[] data)
        {
            try
            {
                File.WriteAllBytes(String.Join(".", fileName, GetExtForCompressedFile(compressFileFormat)), data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
        }

        /// <summary>
        /// Pass fileName with extensions here
        /// fileName path must be relative to root directory of zip 
        /// </summary>
        /// <param name="zipfileName"></param>
        /// <param name="compressFileFormat"></param>
        /// <param name="fileName"></param>
        /// <returns></returns>
        public static Byte[] UnZipFileAndReadContent(string zipfileName, CompressFileFormat compressFileFormat, string fileName)
        {
            Stream ostream = File.OpenRead(zipfileName);

            if (compressFileFormat == CompressFileFormat.Tar)
            {
                Stream trStream = new TarInputStream(ostream, System.Text.Encoding.UTF32);

                TarArchive tarArchive = TarArchive.CreateInputTarArchive(trStream, System.Text.Encoding.UTF32);
                tarArchive.ExtractContents(Directory.GetCurrentDirectory());

                tarArchive.Close();
            }
            else
            {
                Stream zstream = new ZipInputStream(ostream);
                ZipArchive zipArchive = new(zstream, ZipArchiveMode.Read);
                zipArchive.ExtractToDirectory(Directory.GetCurrentDirectory());

                zstream.Close();
            }
            ostream.Close();

            return File.ReadAllBytes(fileName);
        }

        public static void CreateExpectedFile(String fileName, InputFileFormat inputFileFormat, OutputFileFormat outputFileFormat)
        {
            if (WillPandocDo(inputFileFormat
                , outputFileFormat))
            {
                LetPandocDo(fileName, inputFileFormat, outputFileFormat);
            }
            else if(WillPdfToXDo(inputFileFormat,outputFileFormat))
            {
                LetPandocDo(fileName, inputFileFormat, outputFileFormat);
            }
            else
            {
                throw new InvalidDataException();
            }
        }


        private static bool WillPandocDo(InputFileFormat inFileFormat, OutputFileFormat outFileFormat)
        {
            return true;
        }

        private static void LetPandocDo(String fileName, InputFileFormat inFileFormat, OutputFileFormat outFileFormat)
        {

        }

        private static void LetPdfToXDo(String fileName, InputFileFormat inFileFormat, OutputFileFormat outFileFormat)
        {

        }

        private static bool WillPdfToXDo(InputFileFormat infileFormat, OutputFileFormat outfileFormat)
        {
            return true;
        }
    }
}
