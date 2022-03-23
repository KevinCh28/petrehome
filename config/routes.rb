Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    
    resources :users, only: [:create] do
      resources :posts, only: [:create]
    end

    resources :posts, only: [:show, :index]
  end

  root to: "static_pages#root"
end
