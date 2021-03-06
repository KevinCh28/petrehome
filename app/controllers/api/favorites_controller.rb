class Api::FavoritesController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @favorites = Favorite.where(user_id: params[:user_id]).includes(:post)
    render :index
  end

  def create
    @favorite = Favorite.new(favorites_params)
    @favorite.user_id = current_user.id

    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages
    end
  end

  def destroy
    @favorite = Favorite.where(id: params[:id])[0]

    if @favorite && @favorite.user_id === current_user.id
      Favorite.delete(@favorite)
    else
      render json: ["Not favorited"]
    end
  end

  def show
    @favorite = Favorite.find(params[:user_id])
    render :show
  end

  private
  def favorites_params
    params.require(:favorite).permit(:post_id)
  end

end
