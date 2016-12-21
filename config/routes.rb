Rails.application.routes.draw do
  resources :hotels, only: :index
end
