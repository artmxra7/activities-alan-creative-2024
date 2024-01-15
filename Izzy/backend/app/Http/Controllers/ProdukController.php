<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk;

class ProdukController extends Controller
{
    function index (){
        $response = Produk::all();

        return response()->json($response);
    }

    function store (Request $request){
        Produk::create($request->all());

        return response()->json(200);
    }

    function update (Request $request, String $id){
        Produk::find($id)->update($request->all());

        return response()->json(200);
    }

    function delete (String $id){
        $find = Produk::find($id);
        if($find){
            $find->delete();
            return response()->json(200);
        }else{
            return response()->json(404);
        }
    }
}
