Rails.application.routes.draw do
  resources :hotels, only: :index
  resources :courses, only: [:index,:new, :create, :show]

  root to: 'hotels#index'

end
