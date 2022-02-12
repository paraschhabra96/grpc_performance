package main

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"learning_proto/grpc_perfromance/util"
	"log"
	"net/http"
)

func main() {

	// handle `/` route to `http.DefaultServeMux`
	http.HandleFunc( "/", func( res http.ResponseWriter, req *http.Request ) {

		// get response headers
		header := res.Header()

		// set content type header
		header.Set("Content-Type","application/json")

		// reset date header (inline call)
		res.Header().Set("Date","01/01/2020")

		// set status header
		res.WriteHeader(http.StatusBadRequest) // http.StatusBadRequest == 400

		// respond with a JSON string
		fmt.Fprint(res, `{"status":"FAILURE"}`)
	} )

	http.HandleFunc( "/small", func( res http.ResponseWriter, req *http.Request ) {

		// get response headers
		header := res.Header()

		// set content type header
		header.Set("Content-Type","application/protobuf")

		// set status header
		res.WriteHeader(http.StatusOK) // http.StatusBadRequest == 400

		persons := util.GetPersonsProtoFromJsonFile("test_payloads",util.SMALL)

		//Convert to response

		//respomse, _ := proto.Unmar

		response, err := proto.Marshal(persons)
		if err != nil {
			fmt.Println(err)
		}

		res.Write(response)

	} )

	http.HandleFunc( "/medium", func( res http.ResponseWriter, req *http.Request ) {

		// get response headers
		header := res.Header()

		// set content type header
		header.Set("Content-Type","application/protobuf")

		// set status header
		res.WriteHeader(http.StatusOK) // http.StatusBadRequest == 400

		persons := util.GetPersonsProtoFromJsonFile("test_payloads",util.MEDIUM)

		//Convert to response

		//respomse, _ := proto.Unmar

		response, err := proto.Marshal(persons)
		if err != nil {
			fmt.Println(err)
		}

		res.Write(response)

	} )

	http.HandleFunc( "/large", func( res http.ResponseWriter, req *http.Request ) {

		// get response headers
		header := res.Header()

		// set content type header
		header.Set("Content-Type","application/protobuf")

		// set status header
		res.WriteHeader(http.StatusOK) // http.StatusBadRequest == 400

		persons := util.GetPersonsProtoFromJsonFile("test_payloads",util.LARGE)

		//Convert to response

		//respomse, _ := proto.Unmar

		response, err := proto.Marshal(persons)
		if err != nil {
			fmt.Println(err)
		}


		res.Write(response)

	} )

	// listen and serve using `http.DefaultServeMux`
	log.Fatal(http.ListenAndServe(":9001", nil))

}