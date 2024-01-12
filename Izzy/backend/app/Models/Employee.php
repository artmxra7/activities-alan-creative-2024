<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $table = 'employee';
    protected $fillable = ['id', 'namauser', 'email', 'password', 'no_telp', 'Jenis_Kelamin', 'tgllahir', 'gambar', 'role'];
    protected $casts = ['id'=>'string'];
    protected $primaryKey = 'id';
}
