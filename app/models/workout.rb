class Workout < ApplicationRecord
    CATEGORIES = ["yoga", "gym"]

    validates :title, presence: true
    validates :year, numericality: {
      greater_than_or_equal_to: 2000,
      less_than_or_equal_to: Date.today.year
    }
    validates :user_url, presence: true
    validates :category, inclusion: {
      in: CATEGORIES,
      message: "must be one of: #{CATEGORIES.join(', ')}"
    }
end
