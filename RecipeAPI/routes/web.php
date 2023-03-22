<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Inga web-routes behövs i det här projektet.
|
*/

Route::get('/', function () {
    return view('welcome');
});
