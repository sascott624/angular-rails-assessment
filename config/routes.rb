Rails.application.routes.draw do
  root to: 'angular_app#index'
  resources :recipes
  devise_for :users

end
