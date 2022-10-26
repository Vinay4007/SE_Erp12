// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/fileConverter.proto
// </auto-generated>
#pragma warning disable 0414, 1591, 8981
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Converter.Protos {
  public static partial class FileConverter
  {
    static readonly string __ServiceName = "Converter.FileConverter";

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.ConverterFromBytesRequest> __Marshaller_Converter_ConverterFromBytesRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.ConverterFromBytesRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.ConverterFromBytesResponse> __Marshaller_Converter_ConverterFromBytesResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.ConverterFromBytesResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.ConverterFromLinkRequest> __Marshaller_Converter_ConverterFromLinkRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.ConverterFromLinkRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.ConverterFromLinkResponse> __Marshaller_Converter_ConverterFromLinkResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.ConverterFromLinkResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.SupportedFormatsRequest> __Marshaller_Converter_SupportedFormatsRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.SupportedFormatsRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.SupportedFormatsResponse> __Marshaller_Converter_SupportedFormatsResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.SupportedFormatsResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.CheckForFormatRequest> __Marshaller_Converter_CheckForFormatRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.CheckForFormatRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.CheckForFormatResponse> __Marshaller_Converter_CheckForFormatResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.CheckForFormatResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.DecompressAndConvertFromBytesRequest> __Marshaller_Converter_DecompressAndConvertFromBytesRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.DecompressAndConvertFromBytesRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::Converter.Protos.DecompressAndConvertFromBytesResponse> __Marshaller_Converter_DecompressAndConvertFromBytesResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Converter.Protos.DecompressAndConvertFromBytesResponse.Parser));

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Converter.Protos.ConverterFromBytesRequest, global::Converter.Protos.ConverterFromBytesResponse> __Method_ConvertFromBytes = new grpc::Method<global::Converter.Protos.ConverterFromBytesRequest, global::Converter.Protos.ConverterFromBytesResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "ConvertFromBytes",
        __Marshaller_Converter_ConverterFromBytesRequest,
        __Marshaller_Converter_ConverterFromBytesResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Converter.Protos.ConverterFromLinkRequest, global::Converter.Protos.ConverterFromLinkResponse> __Method_ConvertFromLink = new grpc::Method<global::Converter.Protos.ConverterFromLinkRequest, global::Converter.Protos.ConverterFromLinkResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "ConvertFromLink",
        __Marshaller_Converter_ConverterFromLinkRequest,
        __Marshaller_Converter_ConverterFromLinkResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Converter.Protos.SupportedFormatsRequest, global::Converter.Protos.SupportedFormatsResponse> __Method_SupportedFormats = new grpc::Method<global::Converter.Protos.SupportedFormatsRequest, global::Converter.Protos.SupportedFormatsResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "SupportedFormats",
        __Marshaller_Converter_SupportedFormatsRequest,
        __Marshaller_Converter_SupportedFormatsResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Converter.Protos.CheckForFormatRequest, global::Converter.Protos.CheckForFormatResponse> __Method_CheckForFormat = new grpc::Method<global::Converter.Protos.CheckForFormatRequest, global::Converter.Protos.CheckForFormatResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "CheckForFormat",
        __Marshaller_Converter_CheckForFormatRequest,
        __Marshaller_Converter_CheckForFormatResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::Converter.Protos.DecompressAndConvertFromBytesRequest, global::Converter.Protos.DecompressAndConvertFromBytesResponse> __Method_DecompressAndConvertFromBytes = new grpc::Method<global::Converter.Protos.DecompressAndConvertFromBytesRequest, global::Converter.Protos.DecompressAndConvertFromBytesResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "DecompressAndConvertFromBytes",
        __Marshaller_Converter_DecompressAndConvertFromBytesRequest,
        __Marshaller_Converter_DecompressAndConvertFromBytesResponse);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Converter.Protos.FileConverterReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of FileConverter</summary>
    [grpc::BindServiceMethod(typeof(FileConverter), "BindService")]
    public abstract partial class FileConverterBase
    {
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Converter.Protos.ConverterFromBytesResponse> ConvertFromBytes(global::Converter.Protos.ConverterFromBytesRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Converter.Protos.ConverterFromLinkResponse> ConvertFromLink(global::Converter.Protos.ConverterFromLinkRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Converter.Protos.SupportedFormatsResponse> SupportedFormats(global::Converter.Protos.SupportedFormatsRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Converter.Protos.CheckForFormatResponse> CheckForFormat(global::Converter.Protos.CheckForFormatRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::Converter.Protos.DecompressAndConvertFromBytesResponse> DecompressAndConvertFromBytes(global::Converter.Protos.DecompressAndConvertFromBytesRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(FileConverterBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_ConvertFromBytes, serviceImpl.ConvertFromBytes)
          .AddMethod(__Method_ConvertFromLink, serviceImpl.ConvertFromLink)
          .AddMethod(__Method_SupportedFormats, serviceImpl.SupportedFormats)
          .AddMethod(__Method_CheckForFormat, serviceImpl.CheckForFormat)
          .AddMethod(__Method_DecompressAndConvertFromBytes, serviceImpl.DecompressAndConvertFromBytes).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, FileConverterBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_ConvertFromBytes, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Converter.Protos.ConverterFromBytesRequest, global::Converter.Protos.ConverterFromBytesResponse>(serviceImpl.ConvertFromBytes));
      serviceBinder.AddMethod(__Method_ConvertFromLink, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Converter.Protos.ConverterFromLinkRequest, global::Converter.Protos.ConverterFromLinkResponse>(serviceImpl.ConvertFromLink));
      serviceBinder.AddMethod(__Method_SupportedFormats, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Converter.Protos.SupportedFormatsRequest, global::Converter.Protos.SupportedFormatsResponse>(serviceImpl.SupportedFormats));
      serviceBinder.AddMethod(__Method_CheckForFormat, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Converter.Protos.CheckForFormatRequest, global::Converter.Protos.CheckForFormatResponse>(serviceImpl.CheckForFormat));
      serviceBinder.AddMethod(__Method_DecompressAndConvertFromBytes, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Converter.Protos.DecompressAndConvertFromBytesRequest, global::Converter.Protos.DecompressAndConvertFromBytesResponse>(serviceImpl.DecompressAndConvertFromBytes));
    }

  }
}
#endregion