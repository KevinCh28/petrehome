Rails.application.routes.draw do
  root :to => "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    
    resources :users, only: [:create, :show] do
      resources :favorites, only: [:index, :create, :destroy]
      resources :messages, only: [:index, :create, :destroy]
    end

    resources :posts, only: [:show, :index, :create, :update]
  end

  # get '*path', to: "static_pages#frontend_index"
end