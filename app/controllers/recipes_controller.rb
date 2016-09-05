class RecipesController < ApplicationController

  before_action :recipe_find, only: [:show, :edit, :destroy]

  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def create
    raise params.inspect
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      render json: @recipe, status: 201
    else
      @recipe.errors.add("recipe error")
      render :new
    end
  end

  def new
    @recipe = Recipe.new
  end

  def show
    render json: @recipe
  end

  def update
    @recipe.update(recipe_params)
    if @recipe.save
      render json: @recipe
    else
      @recipe.errors.add("recipe error")
      render :edit
    end
  end

  def destroy
    @recipe.destroy
    redirect_to recipes_path
  end

  def edit
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :description, :directions, :recipe_tried, ingredient_ids: [], ingredient_attributes: [:recipe_id, :ingredient_id, :quantity, :measurement])
  end

  def recipe_find
    @recipe = Recipe.find(params[:id])
  end

end
