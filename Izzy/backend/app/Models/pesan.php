<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pesan extends Model
{
    use HasFactory;

    protected $table = 'pesan';
    protected $fillable = ['id', 'user_id', 'produk_id', 'qty', 'status'];
    protected $casts = ['id'=>'string'];
    protected $primaryKey = 'id';
}
