Rails.application.routes.draw do
  resources :hotels, only: :index do
    collection do
      get :service
    end
  end
  resources :courses, only: [:index,:new, :create, :show]

  root to: 'hotels#index'

end
