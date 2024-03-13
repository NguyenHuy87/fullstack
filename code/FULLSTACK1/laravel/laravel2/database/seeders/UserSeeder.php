<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $faker = Factory::create();
        
        $users = [
            [
                'name' => 'Nguyễn Huy',
                'email' =>'872001nguyenhuy@gmail.com',
                'password' => Hash::make('123456'),
                'group_id' =>1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ];

        for ($i=1; $i<=100; $i++){
            $users[] = [
                'name' =>$faker->name,
                'email'=>$faker->unique()->email,
                'password'=>Hash::make($faker->password),
                'group_id'=>$faker->biasedNumberBetween(1, 4),
                'created_at'=>Carbon::now(),
                'updated_at' => Carbon::now()

            ];
        }

        User::insert($users);
    }
}
