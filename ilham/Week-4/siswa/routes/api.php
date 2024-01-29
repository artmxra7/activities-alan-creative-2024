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

    Route::post('/tambahdata', [SiswaController::class, 'tambahData'])->name('tambah.data');
    Route::get('/baca-data/{id}', [SiswaController::class, 'bacaData'])->name('baca.data');
    Route::put('/update-data/{id}', [SiswaController::class, 'updateData'])->name('update.data');
    Route::delete('/delete-data/{id}', [SiswaController::class, 'deleteData'])->name('delete.data');

