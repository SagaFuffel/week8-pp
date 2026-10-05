const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// GET /api/workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve workouts" });
  }
};

// POST /api/workouts
const createWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create({ ...req.body });
    res.status(201).json(newWorkout);
  } catch (error) {
    res
      .status(400)
      .json({ message: "failed to create workout", error: error.message });
  }
};

// GET /api/workouts/:workoutId
const getWorkoutById = async (req, res) => {
  res.send("getWorkoutById");
};

// PUT /api/workouts/:workoutId
const updateWorkout = async (req, res) => {
  res.send("updateWorkout");
};

// DELETE /api/workouts/:workoutId
const deleteWorkout = async (req, res) => {
  res.send("deleteWorkout");
};

module.exports = {
  getAllWorkouts,
  createWorkout,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};

