class Recipe < ApplicationRecord
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  def ingredient_ids=(ingredients)
    ingredients.each do |i|
      ingredient = Ingredient.where(id: i)
      self.ingredients << ingredient
    end
  end

end
