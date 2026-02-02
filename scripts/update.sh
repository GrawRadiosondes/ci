#!/usr/bin/env bash

clear

echo "update js dependencies and save to package.json"
bun update --latest

echo "perform frontend build"
bun run prod
