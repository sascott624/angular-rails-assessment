class Recipe < ApplicationRecord
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  def ingredients_attributes=(ingredient_attributes)
    ingredient_attributes.values.each do |ingredient_attribute|
      ingredient = Ingredient.find_or_create_by(ingredient_attribute[:name])
      RecipeIngredient.create(recipe_id: self.id, ingredient_id: ingredient.id, quantity: ingredient_attribute[:quantity], measurement: ingredient_attribute[:measurement])
    end
  end

end
