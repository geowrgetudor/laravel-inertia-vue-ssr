<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get(
	'/',
	function () {
		return Inertia::render(
			'Home',
			[
				'title' => 'Homepage',
			]
		);
	}
)->name( 'homepage' );

Route::get(
	'/about',
	function () {
		return Inertia::render(
			'About',
			[
				'title' => 'About',
			]
		);
	}
)->name( 'about' );

Route::get(
	'/contact',
	function () {
		return Inertia::render(
			'Contact',
			[
				'title' => 'Contact',
			]
		);
	}
)->name( 'contact' );
