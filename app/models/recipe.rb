class Recipe < ApplicationRecord
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  def recipe_ingredients_attributes=(recipe_ingredients)
    recipe_ingredients.each do |r|
      ingredient = Ingredient.find_or_create_by(name: r[:ingredient][:name])
      self.recipe_ingredients.new(quantity: r[:quantity], measurement: r[:measurement], ingredient_id: ingredient.id)
    end
  end

end
