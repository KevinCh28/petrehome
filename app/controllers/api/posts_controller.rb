class Api::PostsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    @posts = Post.all
    render "api/posts/index"
  end

  def show
    @post = Post.find(params[:id])
    render "api/posts/show"
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def edit
  # end

  private
  def post_params
    params.require(:post).permit(:pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat, :author_id)
  end

end
