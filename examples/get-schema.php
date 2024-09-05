<?php

use WpAi\Schemas\Schema;

require_once __DIR__.'/../vendor/autoload.php';

if ($argc < 2) {
    echo "Usage: php get-schema.php <schema-name>\n";
    exit(1);
}

$schemaName = $argv[1];
$schema = new Schema($schemaName);

$json = <<<'EOT'
{
  "name": "all_combined",
  "join": " ",
  "values": [
    {
      "type": "db_query",
      "result": {
        "type": "string"
      },
      "location": {
        "table": "posts",
        "column": "post_title"
      }
    },
    {
      "type": "db_query",
      "result": {
        "type": "string"
      },
      "location": {
        "table": "posts",
        "column": "post_content"
      }
    },
    {
      "type": "db_query",
      "result": {
        "type": "array",
        "join": " "
      },
      "location": {
        "table": "postmeta",
        "column": "meta_value"
      }
    },
    {
      "type": "db_query",
      "result": {
        "type": "array",
        "join": " "
      },
      "location": {
        "table": "commentmeta",
        "column": "meta_value"
      }
    }
  ]
}
EOT;
// echo $schema;
$schema->validate($json);
