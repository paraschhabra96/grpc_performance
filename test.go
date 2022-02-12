package main

import (
	"fmt"
	"learning_proto/grpc_perfromance/util"
)

func main()  {
	result := util.GetPersonsFromJsonFile("test_payloads",util.LARGE)
	fmt.Println(result)
}