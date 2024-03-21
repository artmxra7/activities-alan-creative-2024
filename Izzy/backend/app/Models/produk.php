<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class produk extends Model
{
    use HasFactory;
    protected $table = 'produk';
    protected $fillable = ['id', 'nama_produk', 'stok', 'harga', 'gambar', 'deskripsi'];
    protected $casts = ['id'=>'string'];
    protected $primaryKey = 'id';
}
