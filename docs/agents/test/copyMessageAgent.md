# copyMessageAgent

## Description

CopyMessage agent

## Schema

#### inputs

```json

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "",
  "type": "object",
  "properties": {},
  "required": []
}

````

## Input example of the next node

```json

[
  ":agentId",
  ":agentId.messages",
  ":agentId.messages.$0",
  ":agentId.messages.$1",
  ":agentId.messages.$2",
  ":agentId.messages.$3"
]

````

## Samples

### Sample0

#### inputs

```json

{}

````

#### params

```json

{"count":4,"message":"hello"}

````

#### result

```json

{
  "messages": [
    "hello",
    "hello",
    "hello",
    "hello"
  ]
}

````

## Author

Receptron team

## Repository

https://github.com/receptron/graphai

## License

MIT

