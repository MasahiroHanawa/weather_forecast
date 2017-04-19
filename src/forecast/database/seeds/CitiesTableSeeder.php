<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cities')->insert([
            'city_id' => '2848756',
            'name' => 'Berlin Reinickendorf',
            'country' => 'DE',
            'lon' => '13.33333',
            'lat' => '52.566669',
        ]);
        DB::table('cities')->insert([
            'city_id' => '2950096',
            'name' => 'Bernau bei Berlin',
            'country' => 'DE',
            'lon' => '13.58708',
            'lat' => '52.679821',
        ]);
        DB::table('cities')->insert([
            'city_id' => '7290255',
            'name' => 'Berlin Treptow',
            'country' => 'DE',
            'lon' => '13.44469',
            'lat' => '52.493759',
        ]);
        DB::table('cities')->insert([
            'city_id' => '2855598',
            'name' => 'Berlin Pankow',
            'country' => 'DE',
            'lon' => '13.40186',
            'lat' => '52.56926',
        ]);
        DB::table('cities')->insert([
            'city_id' => '2878102',
            'name' => 'Berlin Lichtenberg',
            'country' => 'DE',
            'lon' => '13.49975',
            'lat' => '52.51395',
        ]);
        DB::table('cities')->insert([
            'city_id' => '6545310',
            'name' => 'Berlin Mitte',
            'country' => 'DE',
            'lon' => '13.40489',
            'lat' => '52.520031',
        ]);
        DB::table('cities')->insert([
            'city_id' => '7290245',
            'name' => 'Berlin Steglitz Zehlendorf',
            'country' => 'DE',
            'lon' => '13.24183',
            'lat' => '52.434849',
        ]);
        DB::table('cities')->insert([
            'city_id' => '7290251',
            'name' => 'Berlin Wilmersdorf',
            'country' => 'DE',
            'lon' => '13.29097',
            'lat' => '52.500969',
        ]);
        DB::table('cities')->insert([
            'city_id' => '7290252',
            'name' => 'Berlin Spandau',
            'country' => 'DE',
            'lon' => '13.19921',
            'lat' => '52.551102',
        ]);
        DB::table('cities')->insert([
            'city_id' => '7290253',
            'name' => 'Berlin Tempelhof',
            'country' => 'DE',
            'lon' => '13.41027',
            'lat' => '52.476929',
        ]);
        DB::table('cities')->insert([
            'city_id' => '7290254',
            'name' => 'Berlin Schoeneberg',
            'country' => 'DE',
            'lon' => '13.34839',
            'lat' => '52.474571',
        ]);
    }
}
