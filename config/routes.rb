Rails.application.routes.draw do
  resources :hotels, only: [:index, :show] do
    collection do
      get :service
      get :brandstory
    end
  end
  resources :courses, only: [:index, :new, :create, :show]
  resources :selections, only: [:index, :show]

  root to: 'hotels#index'

end
