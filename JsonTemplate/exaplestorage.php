<?php
include_once('storage.php');

class ExampleStorage extends Storage {
    public function __construct() {
        parent::__construct(new JsonIO('contacts.json'));
    }
}