class Recipe < ApplicationRecord
  belongs_to :user
  has_many :favorite_recipes
  has_many :favorited_by, through: :favorite_recipes, source: :user

end
