<?php

namespace WpAi\Schemas;

use Swaggest\JsonSchema\InvalidValue;
use Swaggest\JsonSchema\Schema as JsonSchema;

class Schema
{
    private string $filename;

    private string $path;

    private $schema;

    public function __construct(private string $name)
    {
        $this->filename = "$name.schema.json";
        $this->path = __DIR__.'/../schemas/'.$this->filename;
        $this->schema = JsonSchema::import($this->toObject());
    }

    public function validate(string $json): void
    {
        $this->schema->in(json_decode($json));
    }

    public function isValid(string $json)
    {
        try {
            $this->validate($json);

            return true;
        } catch (InvalidValue $e) {
            return false;
        }
    }

    public function getContents(): string
    {
        return file_get_contents($this->path);
    }

    public function __toString(): string
    {
        return $this->getContents();
    }

    public function toArray(): array
    {
        return json_decode($this->getContents(), true);
    }

    public function toObject(): object
    {
        return json_decode($this->getContents());
    }

    public function __invoke(): array
    {
        return $this->toArray();
    }
}
