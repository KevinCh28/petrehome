class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    # @user = User.where(id: params[:id]).includes(:favorite_posts).includes(:messages)
    @user = User.find_by(id: params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :zip_code)
  end
  
end
