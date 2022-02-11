<?php
include_once('storage.php');

class FootballStorage extends Storage {
    public function __construct() {
        parent::__construct(new JsonIO('contacts.json'));
    }
}