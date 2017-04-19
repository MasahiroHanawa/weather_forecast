<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Services\CityService;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(CityService $cityService)
    {
        $this->cityService = $cityService;
    }

    /**
     * find city data
     * @param $request
     */
    public function index(Request $request)
    {
        $city = $this->cityService->findRandomCity($request);
        return response()->json([
            'data'  => $city
        ]);
    }
}