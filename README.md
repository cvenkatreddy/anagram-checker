# anagram-checker

A sample anagram checker

## Pre-requisite Tools

1. Node version 12 or above
2. Visual Studio Code

## Quickstart

You know setting up is very quick!

`npm install`

## Command line execution

`npm test`  # for running all tests

Alternatively, you can run in docker without installing node locally

## Docker Execution
Download and install Docker

For Mac: https://www.docker.com/products/docker-desktop

For Windows: https://docs.docker.com/desktop/windows/

Build the Docker image
`docker build -t anagram-tests .`

Run the test suite in Docker
`docker run --rm anagram-tests`


