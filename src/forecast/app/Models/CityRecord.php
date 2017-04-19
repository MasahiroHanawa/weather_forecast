<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CityRecord extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'city_id',
        'token',
    ];

}
