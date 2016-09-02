Rails.application.routes.draw do
  root to: 'angular_app#index'
  resources :recipes
  resources :ingredients
  devise_for :users

end
