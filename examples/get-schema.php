<?php

use WpAi\Schemas\Schema;

require_once __DIR__ . '/../vendor/autoload.php';

if ($argc < 2) {
    echo "Usage: php get-schema.php <schema-name>\n";
    exit(1);
}

$schemaName = $argv[1];
$schema = new Schema($schemaName);

echo $schema;

print_r($schema());