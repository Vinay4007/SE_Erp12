package main

import (
	"context"
	"fmt"
	"logger/internal"
	pb "logger/rpc"
	"net"
	"time"

	"google.golang.org/grpc"
)

const UPTIME = 30

type LoggerServiceServer struct {
	pb.UnimplementedLoggerServiceServer
}

func (ls *LoggerServiceServer) StoreLog(ctx context.Context, in *pb.LogInput) (*pb.LogOutput, error) {
	fmt.Println(internal.FormatLogInput(in))
	return &pb.LogOutput{Stored: true}, nil
}

var closeServer chan struct{}

func CountForServerClose() {
	time.Sleep(time.Duration(time.Second * UPTIME))
	fmt.Println("Closing server initiated")
	closeServer <- struct{}{}
}

func CloseServer(server *grpc.Server) {
	<-closeServer
	server.Stop()
	fmt.Println("Closed server")
}

func main() {
	listener, err := net.Listen("tcp", "localhost:5000")
	internal.ErrorHandle(err)

	closeServer = make(chan struct{})

	gserver := grpc.NewServer()
	pb.RegisterLoggerServiceServer(gserver, &LoggerServiceServer{})

	go CountForServerClose()
	go CloseServer(gserver)

	if err := gserver.Serve(listener); err != nil {
		internal.ErrorHandle(err)
	}
}
