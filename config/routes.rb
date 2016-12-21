Rails.application.routes.draw do
  resources :hotels, only: :index

  root to: 'hotels#index'

end
