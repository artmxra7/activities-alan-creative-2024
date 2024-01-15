<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Employee;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    function login(Request $request){
        $user = $request->email;
        $pass = $request->password;

        $data = [
            'email' => $user,
            'password' => $pass
        ];

        $EmployeeDetect = Employee::where('email', $user)->where('password', $pass)->first();
        $UserDetect = User::where('email', $user)->where('password', $pass)->first();

        if($EmployeeDetect){
            $token = base64_encode(json_encode($data));
            return response()->json($token);
        }else if ($UserDetect){
            $token = base64_encode(json_encode($data));
            return response()->json($token);
        }else{
            return response()->json(401);
        }
    }

    function Register(Request $request){
        $request->validate([
            'namauser' => 'required',
            'email' => 'required',
            'password' => 'required',
            'no_telp' => 'required',
            'jeniskelamin' => 'required',
            'tgllahir' => 'required'
        ]);

        $id = Str::random(11);

        User::create([
            'id' => $id,
            'namauser' => $request->namauser,
            'email' => $request->email,
            'password' => $request->password,
            'no_telp' => $request->no_telp,
            'Jenis_Kelamin' => $request->jeniskelamin,
            'tgllahir' => $request->tgllahir
        ]);

        return response()->json(200);
    }

    function profile(String $token){
        if($token){
            $freshData = base64_decode($token);
            $email = json_decode($freshData)->email;
            $EmployeeDetect = Employee::where('email', $email)->first();
            $UserDetect = User::where('email', $email)->first();
            $response = $EmployeeDetect ? $EmployeeDetect : ($UserDetect ? $UserDetect : 401);
            return response()->json($response);
        }else{
            return response()->json(401);
        }
    }

    function NavProfile(String $token){
        if($token){
            $freshData = base64_decode($token);
            $email = json_decode($freshData)->email;
            $EmployeeDetect = Employee::where('email', $email)->first();
            $UserDetect = User::where('email', $email)->first();
            $response = $EmployeeDetect ? [
                'namauser' => $EmployeeDetect->namauser,
                'gambar' => $EmployeeDetect->gambar
            ] : ($UserDetect ? [
                'namauser' => $UserDetect->namauser,
                'gambar' => $UserDetect->gambar
            ] : 401);
            return response()->json($response);
        }else{
            return response()->json(401);
        }
    }

    function UploadImageProfile(Request $request, String $token){
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);

        $freshData = base64_decode($token);
        $email = json_decode($freshData)->email;

        $find = User::where('email', $email)->first();

        try{
            if($request->hasFile('image')){
                $image = $request->file('image');
                $filename = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $filename);

                $tryUpdate = $find->update([
                    'gambar' => $filename
                ]);
                
                if($tryUpdate){
                    return response()->json(200);
                }else{
                    return response()->json(401);
                }
            }
        }catch(\Exception $e){
            return response()->json(401);
        }

    }

    function UpdateProfile(Request $request, String $token) {
        if (!$token) {
            return;
        }
    
        $freshData = base64_decode($token);
        $email = json_decode($freshData)->email;
        $index = $request->ChangedIndex;
        $find = User::where('email', $email)->first();
    
        $updateData = [];
        switch ($index) {
            case 0:
                $updateData['namauser'] = $request->value;
                break;
            case 1:
                $updateData['Jenis_Kelamin'] = $request->value;
                break;
            case 2:
                $updateData[''] = $request->value;
                break;
        }
    
        try {
            $find->update($updateData);
            return response()->json(200);
        } catch (\Exception $e) {
            return response()->json(401);
        }
    } 
}
