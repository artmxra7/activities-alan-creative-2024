<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Siswa;

class SiswaController extends Controller
{
    function tambahdata(Request $request){
       $request->validate([
           'nama' => 'required',
           'nik' => 'required',
           'alamat' => 'required',
           'gender' => 'required',
       ]);

       try{
           $siswa = new Siswa;
           $siswa->nama = $request->input('nama');
           $siswa->nik = $request->input('nik');
           $siswa->alamat = $request->input('alamat');
           $siswa->gender = $request->input('gender');
           $siswa->save();
           return response()->json([
               'message' => 'Data siswa berhasil ditambahkan'
           ]);
       }catch(\Exception $e){
           return response()->json([
               'message' => $e->getMessage()
           ]);
       }
    }

    function tampildata(){
        $siswa = Siswa::all();
        return response()->json([
            'data' => $siswa
        ]);
    }

    function updatedata(Request $request){
        $request->validate([
            'nama' => 'required',
            'oldnik' => 'required',
            'nik' => 'required',
            'alamat' => 'required',
            'gender' => 'required',
        ]);

        try{
            $siswa = Siswa::find($request->input('oldnik'));
            $siswa->nama = $request->input('nama');
            $siswa->nik = $request->input('nik');
            $siswa->alamat = $request->input('alamat');
            $siswa->gender = $request->input('gender');
            $siswa->save();
            return response()->json([
                'message' => 'Data siswa berhasil diupdate'
            ]);
        }catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }

    function hapusdata(Request $request){
        $request->validate([
            'nik' => 'required',
        ]);

        try{
            $siswa = Siswa::where('nik', $request->input('nik'))->first();
            $siswa->delete();
            return response()->json([
                'message' => 'Data siswa berhasil dihapus'
            ]);
        }catch(\Exception $e){
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }
}
