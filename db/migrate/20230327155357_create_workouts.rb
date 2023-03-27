class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :title
      t.integer :year
      t.string :parti
      t.string :description
      t.string :user_url
      t.string :category
      t.boolean :discount
      t.boolean :female_director

      t.timestamps
    end
  end
end
