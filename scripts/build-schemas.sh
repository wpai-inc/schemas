#!/bin/bash

# Set the input and output directories
input_dir="./src/schemas"
output_dir="./dist"

# Get the path to the local ajv-cli installation
ajv_cli_path="./node_modules/.bin/ajv"

# Create the output directory if it doesn't exist
mkdir -p "$output_dir"

# Loop through all JSON files in the input directory
for file in "$input_dir"/*.json; do
  # Get the base filename without the extension
  filename=$(basename "$file" .json)

  # Generate the JavaScript object using the local ajv-cli
  "$ajv_cli_path" compile --strict=false -s "$file" -o "$output_dir/$filename.js"
done
