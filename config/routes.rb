Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create]
    resources :posts, only: [:create, :show, :index]
  end

  root to: "static_pages#root"
end
