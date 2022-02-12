package main

import (
	"context"
	"fmt"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/emptypb"
	grpc2 "learning_proto/grpc_perfromance/grpc/protos"
	"learning_proto/grpc_perfromance/util"
	"log"
	"net"
)

type server struct {}

const (
	PAYLOAD_SUB_PATH = "test_payloads"
)

func (s *server) GetSmallRespponse(context.Context, *emptypb.Empty) (*grpc2.Persons, error) {
	response := util.GetPersonsProtoFromJsonFile(PAYLOAD_SUB_PATH,util.SMALL)
	return response,nil
}


func (s *server) GetMediumRespponse(context.Context, *emptypb.Empty) (*grpc2.Persons, error) {
	response := util.GetPersonsProtoFromJsonFile(PAYLOAD_SUB_PATH,util.MEDIUM)
	return response,nil
}

func (s *server) GeLaegeRespponse(context.Context, *emptypb.Empty) (*grpc2.Persons, error) {
	response := util.GetPersonsProtoFromJsonFile(PAYLOAD_SUB_PATH,util.LARGE)
	return response,nil
}

func (s *server) UnimplementedPersonServiceServer() {

}

func main()  {

	address := "0.0.0.0:9002"
	lis, err := net.Listen("tcp",address)
	if err != nil {
		log.Panicf("Failed to listen: %v",address)
	}
	s := grpc.NewServer()

	grpc2.RegisterPersonServiceServer(s,&server{})
	fmt.Println("Starting server...")
	if err:=s.Serve(lis);err != nil {
		log.Fatalf("Failed to serve: %v",err)
	} else {
		fmt.Println("Listeing on ",address)
	}


}

