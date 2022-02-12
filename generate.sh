 protoc --go_out=./grpc  --go_opt=paths=source_relative --go-grpc_out=./grpc --go-grpc_opt=paths=source_relative protos/*.proto

 grpc_tools_node_protoc --proto_path=protos --js_out=import_style=commonjs,binary:./clients/http_proto_vs_json/personpb --grpc_out=grpc_js:./clients/http_proto_vs_json/personpb person.proto