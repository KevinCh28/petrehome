Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    
    resources :users, only: [:create, :show] do
      resources :favorites, only: [:index, :create, :destroy]
      resources :messages, only: [:index, :create, :destroy]
    end

    resources :posts, only: [:show, :index, :create, :update]
  end

  root to: "static_pages#root"
end
