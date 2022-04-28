class Api::PostsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    # if dogOrCat && !petBreed && !petAge && !petGender
    #   @posts = Post.fetch(dogOrCat)
    # elsif dogOrCat && petBreed && !petAge && !petGender
    #   @posts = Post.fetchBreed(dogOrCat, petBreed)
    # elsif dogOrCat && petBreed && petAge && !petGender
    #   @posts = Post.fetchBreedAge(dogOrCat, petBreed, petAge)
    # elsif dogOrCat && petBreed && !petAge && petGender
    #   @posts = Post.fetchBreedGender(dogOrCat, petBreed, petGender)
    # elsif dogOrCat && petBreed && petAge && petGender
    #   @posts = Post.fetchBreedAgeGender(dogOrCat, petBreed, petAge, petGender)
    # elsif dogOrCat && !petBreed && petAge && !petGender
    #   @posts = Post.fetchAge(dogOrCat, petAge)
    # elsif dogOrCat && !petBreed && petAge && petGender
    #   @posts = Post.fetchAgeGender(dogOrCat, petAge, petGender)
    # elsif dogOrCat && !petBreed && !petAge && petGender
    #   @posts = Post.fetchGender(dogOrCat, petGender)
    # if searchStuff
      @posts = Post.fetch(searchStuff)
    # else
    #   @posts = Post.all
    # end

    render "api/posts/index"
  end

  def show
    @post = Post.with_attached_photos.find(params[:id])
    @favorites = current_user.favorite_posts
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

  def update
    @post = Post.with_attached_photos.find(params[:id])

    if @post.update(post_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def post_params
    params.require(:post).permit(:pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat, :author_id, photos: [])
  end

  # def dogOrCat
  #   return params[:filters][:dogOrCat] if params[:filters]
  # end

  # def petBreed
  #   return params[:filters][:petBreed] if params[:filters]
  # end

  # def petAge
  #   return params[:filters][:petAge] if params[:filters]
  # end
  
  # def petGender
  #   return params[:filters][:petGender] if params[:filters]
  # end

  def searchStuff
    params[:dogOrCat]
  end
end
