<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();//bigint, auto_increment, primary key
            $table->string('name', 255)->nullable();//string=>varchar
            $table->integer('price')->default(0)->nullable;//integer=>int
            $table->text('details')->nullable(); 
            $table->timestamps();//create_at, updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
