class WorkoutsController < ApplicationController
    wrap_parameters false
    def index
        workouts = Workout.all 
        render json: workouts 
    end

    def create
        workout = Workout.create!(workout_params)
        render json: workout, status: :created
      rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    private 

    def workout_params
      params.permit(:title, :year, :parti, :description, :user_url, :category, :discount, :female_director)
    end
end
