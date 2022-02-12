// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var person_pb = require('./person_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_Persons(arg) {
  if (!(arg instanceof person_pb.Persons)) {
    throw new Error('Expected argument of type Persons');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Persons(buffer_arg) {
  return person_pb.Persons.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var PersonServiceService = exports.PersonServiceService = {
  getSmallRespponse: {
    path: '/PersonService/GetSmallRespponse',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: person_pb.Persons,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_Persons,
    responseDeserialize: deserialize_Persons,
  },
  getMediumRespponse: {
    path: '/PersonService/GetMediumRespponse',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: person_pb.Persons,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_Persons,
    responseDeserialize: deserialize_Persons,
  },
  geLaegeRespponse: {
    path: '/PersonService/GeLaegeRespponse',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: person_pb.Persons,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_Persons,
    responseDeserialize: deserialize_Persons,
  },
};

exports.PersonServiceClient = grpc.makeGenericClientConstructor(PersonServiceService);
