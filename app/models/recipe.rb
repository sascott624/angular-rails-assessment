class Recipe < ApplicationRecord
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  def ingredient_ids=(ingredients)
  ingredients.values.each do |id|
    i = Ingredient.find_or_create_by(id: id)
    self.ingredients << ingredient
  end
end

end
