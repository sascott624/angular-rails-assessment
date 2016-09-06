class IngredientsController < ApplicationController

  before_action :ingredient_find, only: [:show, :edit, :destroy, :update]

  def index
    @ingredients = Ingredient.all
    render json: @ingredients
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.save
      render json: @ingredient, status: 201
    else
      @ingredient.errors.add("ingredient error")
      render :new
    end
  end

  def new
    @ingredient = Ingredient.new
  end

  def show
    render json: @ingredient
  end

  def update
    @ingredient.update(ingredient_params)
    if @ingredient.save
      render json: @ingredient
    else
      @ingredient.errors.add("ingredient error")
      render :edit
    end
  end

  def destroy
    @ingredient.destroy
    redirect_to ingredients_path
  end

  def edit
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name, :food_group)
  end

  def ingredient_find
    @ingredient = Ingredient.find(params[:id])
  end

end
