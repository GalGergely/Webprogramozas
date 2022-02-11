<?php
include_once('storage.php');

class ideaStorage extends Storage {
    public function __construct() {
        parent::__construct(new JsonIO('ideas.json'));
    }
}