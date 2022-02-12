package util

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	grpc "learning_proto/grpc_perfromance/grpc/protos"
	"learning_proto/grpc_perfromance/models"
	"os"
)

const (
	SMALL = "small.json"
	MEDIUM = "medium.json"
	LARGE = "large.json"
)

func GetPersonsFromJsonFile(subPath string,file string) []models.Person {
	// Open our jsonFile
	jsonFile, err := os.Open(subPath + "/" + file)
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
		return nil
	}
	defer jsonFile.Close()

	var result []models.Person
	bytes,err := ioutil.ReadAll(jsonFile)
	if err != nil {
		fmt.Println(err)
		return nil
	}

	err = json.Unmarshal(bytes,&result)
	if err != nil {
		fmt.Println(err)
		return nil
	}

	return result
}

func GetPersonsProtoFromJsonFile(subPath string,file string) *grpc.Persons {
	// Open our jsonFile
	jsonFile, err := os.Open(subPath + "/" + file)
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
		return nil
	}
	defer jsonFile.Close()

	var persons []*grpc.Person
	bytes,err := ioutil.ReadAll(jsonFile)
	if err != nil {
		fmt.Println(err)
		return nil
	}

	err = json.Unmarshal(bytes,&persons)
	if err != nil {
		fmt.Println(err)
		return nil
	}

	var result grpc.Persons
	result.Persons = persons

	return &result
}