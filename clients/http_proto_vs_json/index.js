var axios = require('axios');
var messages = require('./personpb/person_pb');
var services = require('./personpb/person_grpc_pb');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

var grpc = require('@grpc/grpc-js');

var target = 'localhost:9002';

function initClient() {
    var client = new services.PersonServiceClient(target, grpc.credentials.createInsecure());


    return client
}

function getSmallGrpcResponse(client) {

    var req = new google_protobuf_empty_pb.Empty()

    console.log("Req is ",req)

    console.log("Client is",client)

    client.getSmallRespponse(req,function (err,response) {
        if (err) {
            console.log("Error occurred:",err)
        } else {
            console.log("Sum is :", response.getPersonsList())
        }
    });

    // console.log(resp)
}


const delay = ms => new Promise(res => setTimeout(res, ms));

async function getResponse(type) {

    var config = {
        method: 'get',
        url: 'http://localhost:9000/' + type,
        headers: { }
    };

    before = Date.now()

    response = await axios(config)

    after = Date.now()

    // console.log(response.data)

    diff = after - before

    return diff

}

async function getProtoResponse(type) {
    var config = {
        method: 'get',
        url: 'http://localhost:9001/'+type,
        headers: { }
    };


    before = Date.now()

    response = await axios(config)

    after = Date.now()

    // console.log(response.data)

    diff = after - before

    return diff

}

async function main() {

    numRequests = 100.0;
    delayMs = 100;

    sumSmall = 0.0;
    sumMedium = 0.0;
    sumLarge = 0.0;

    sumSmallProto = 0.0;
    sumMediumProto = 0.0;
    sumLargeProto = 0.0;

    //Do grpc requests
    grpcClient = initClient()
    getSmallGrpcResponse(grpcClient)

    // //Do small requests
    // for (i=0;i<numRequests;i++) {
    //     console.log("doing small request",i+1)
    //     diff = await getResponse("small")
    //     sumSmall +=diff
    //     await delay(delayMs)
    // }
    //
    // //Do medium requests
    // for (i=0;i<numRequests;i++) {
    //     console.log("doing medium request",i+1)
    //     diff = await getResponse("medium")
    //     sumMedium +=diff
    //     await delay(delayMs)
    // }
    //
    // //Do large requests
    // for (i=0;i<numRequests;i++) {
    //     console.log("doing large request",i+1)
    //     diff = await getResponse("large")
    //     sumLarge +=diff
    //     await delay(delayMs)
    // }
    //
    //
    // //Do small proto requests
    // for (i=0;i<numRequests;i++) {
    //     console.log("doing small proto request",i+1)
    //     diff = await getProtoResponse("small")
    //     sumSmallProto +=diff
    //     await delay(delayMs)
    // }
    //
    // //Do medium proto requests
    // for (i=0;i<numRequests;i++) {
    //     console.log("doing medium proto request",i+1)
    //     diff = await getProtoResponse("medium")
    //     sumMediumProto +=diff
    //     await delay(delayMs)
    // }
    //
    // //Do large proto requests
    // for (i=0;i<numRequests;i++) {
    //     console.log("doing large proto request",i+1)
    //     diff = await getProtoResponse("large")
    //     sumLargeProto +=diff
    //     await delay(delayMs)
    // }
    //
    //
    // console.log("Average small response time: ",sumSmall/numRequests)
    // console.log("Average medium response time: ",sumMedium/numRequests)
    // console.log("Average large response time: ",sumLarge/numRequests)
    //
    // console.log("Average small proto response time: ",sumSmallProto/numRequests)
    // console.log("Average medium proto response time: ",sumMediumProto/numRequests)
    // console.log("Average large proto response time: ",sumLargeProto/numRequests)


}

main()