Rails.application.routes.draw do
  resources :hotels, only: :index
  resources :courses, only: :show

  root to: 'hotels#index'

end
