<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DataActivity extends Model
{
    protected $fillable = [
        'x', 'y', 'ts'
    ];
}
