<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiswaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/siswaRead', [SiswaController::class, 'tampildata']);
Route::post('/siswaAdd', [SiswaController::class, 'tambahdata']);
Route::put('/siswaUpdate', [SiswaController::class, 'updatedata']);
Route::delete('/siswaDelete', [SiswaController::class, 'hapusdata']);