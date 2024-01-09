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
            if($EmployeeDetect){
                return response()->json($EmployeeDetect);
            }else if ($UserDetect){
                return response()->json($UserDetect);
            }else{
                return response()->json(401);
            }
        }else{
            return response()->json(401);
        }
    }
}
