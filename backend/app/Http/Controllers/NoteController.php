<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Note::latest()->get());
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $note = Note::create($validated + ['completed' => false]);

        return response()->json($note, 201);
    }
}
