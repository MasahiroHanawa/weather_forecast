<?php
namespace App\Services;
use App\Models\City;
use App\Models\CityRecord;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class CityService
{
    /**
     * Create a new service instance.
     *
     * @return void
     */
    public function __construct(City $city, CityRecord $cityRecord)
    {
        $this->city = $city;
        $this->cityRecord = $cityRecord;
    }

    /**
     * Find city as randomly except for be registered city
     * @param $request object
     * @return $city object
     */
    public function findRandomCity ($request) {
        $cityIds = [];
        $cityRecords = $this->cityRecord
            ->where('token', $request->token)
            ->get()
            ->toArray();

        if (!empty($cityRecords))
        {
            foreach($cityRecords as $cityRecord)
            {
                $cityIds[] = $cityRecord['city_id'];
            }
            $city = $this->city
                ->whereNotIn('city_id', $cityIds)
                ->inRandomOrder()
                ->first();
        }
        else
        {
            $city = $this->city
                ->first();
        }

        if (!empty($city)) {
            DB::transaction(function () use ($city, $request)
            {
                try {
                    $dt = Carbon::now();
                    $param = [
                        'city_id' => $city->city_id,
                        'name' => $city->name,
                        'token' => $request->token,
                        'created_at' => $dt,
                        'updated_at' => $dt,
                    ];

                    $this->cityRecord->create($param);

                    DB::commit();

                    $result = [
                        'result' => true,
                        'action' => 'register',
                        'error_no' => '000',
                        'error_msg' => 'complete register'
                    ];

                    Log::info('cityRecord', $result);

                }
                catch (\Exception $e)
                {
                    $result = [
                        'result' => false,
                        'action' => 'register',
                        'error_no' => '800',
                        'error_msg' => 'fail to register'
                    ];

                    Log::error('cityRecord', $result);
                }
            });
        }

        return $city;
    }


}