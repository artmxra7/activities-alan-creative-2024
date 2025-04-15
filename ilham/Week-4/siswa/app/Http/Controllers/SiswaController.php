<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use Illuminate\Http\Request;

class SiswaController extends Controller
{
    public function tambahData(Request $request)
    {
        $request->validate([
            'nama' => 'required|string',
            'nik' => 'required|integer',
            'alamat' => 'required|string',
            'gender' => 'required|string',
        ]);

        $siswa = Siswa::create([
            'nama' => $request->input('nama'),
            'nik' => $request->input('nik'),
            'alamat' => $request->input('alamat'),
            'gender' => $request->input('gender'),
        ]);

        return response()->json([
            'message' => 'Data siswa berhasil ditambahkan',
            'data' => $siswa,
        ], 200);
    }

    public function bacaData(String $id)
    {
        $siswa = Siswa::find($id);

        if ($siswa) {
            return response()->json($siswa);
        } else {
            return response()->json(['message' => 'Data siswa tidak ditemukan'], 404);
        }
    }

    public function updateData($id, Request $request)
    {
        $data = $request->all();

        $siswa = Siswa::find($id);

        if ($siswa) {
            $siswa->update([
                'nama' => $data['nama'],
                'nik' => $data['nik'],
                'alamat' => $data['alamat'],
                'gender' => $data['gender'],
            ]);

            return response()->json(['message' => 'Data siswa berhasil diperbarui']);
        } else {
            return response()->json(['message' => 'Data siswa tidak ditemukan'], 404);
        }
    }

    public function deleteData($id)
    {
        $siswa = Siswa::find($id);

        if ($siswa) {
            $siswa->delete();
            return response()->json(['message' => 'Data siswa berhasil dihapus']);
        } else {
            return response()->json(['message' => 'Data siswa tidak ditemukan'], 404);
        }
    }
    public function semuaData()
    {
        $siswa = Siswa::all();

        return response()->json($siswa);
    }
}
