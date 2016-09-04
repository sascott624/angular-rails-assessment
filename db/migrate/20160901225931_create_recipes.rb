class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :description
      t.string :directions
      t.boolean :recipe_tried
    end
  end
end
