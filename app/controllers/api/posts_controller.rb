class Api::PostsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    if searchDogOrCat === "" && petBreed === "" && petAge === "" && petGender === ""
      @posts = Post.all
    elsif searchDogOrCat && petBreed === "" && petAge === "" && petGender === ""
      @posts = Post.fetchDogOrCat(searchDogOrCat)
    elsif searchDogOrCat && petBreed && petAge === "" && petGender === ""
      @posts = Post.fetchDogOrCatBreed(searchDogOrCat, petBreed)
    elsif searchDogOrCat && petBreed && petAge && petGender === ""
      @posts = Post.fetchDogOrCatBreedAge(searchDogOrCat, petBreed, petAge)
    elsif searchDogOrCat && petBreed && petAge === "" && petGender
      @posts = Post.fetchDogOrCatBreedGender(searchDogOrCat, petBreed, petGender)
    elsif searchDogOrCat && petBreed && petAge && petGender
      @posts = Post.fetchDogOrCatBreedAgeGender(searchDogOrCat, petBreed, petAge, petGender)
    elsif searchDogOrCat && petBreed === "" && petAge && petGender === ""
      @posts = Post.fetchDogOrCatAge(searchDogOrCat, petAge)
    elsif searchDogOrCat && petBreed === "" && petAge && petGender
      @posts = Post.fetchDogOrCatAgeGender(searchDogOrCat, petAge, petGender)
    elsif searchDogOrCat && petBreed === "" && petAge === "" && petGender
      @posts = Post.fetchDogOrCatGender(searchDogOrCat, petGender)
    elsif searchDogOrCat === "" && petBreed && petAge === "" && petGender === ""
      @post = Post.fetchBreed(petBreed)
    elsif searchDogOrCat === "" && petBreed === "" && petAge && petGender === ""
      @post = Post.fetchAge(petAge)
    elsif searchDogOrCat === "" && petBreed === "" && petAge === "" && petGender
      @post = Post.fetchGender(petGender)
    elsif searchDogOrCat === "" && petBreed === "" && petAge && petGender
      @post = Post.fetchAgeGender(petAge, petGender)
    elsif searchDogOrCat === "" && petBreed === "" && petAge && petGender
      @post = Post.fetchGenderBreed(petBreed, petGender)
    elsif searchDogOrCat === "" && petBreed && petAge === "" && petGender
      @post = Post.fetchAgeBreed(petAge, petBreed)
    else
      @posts = Post.all
    end

    render "api/posts/index"
  end

  def show
    @post = Post.with_attached_photos.find(params[:id])
    if current_user
      @favorites = current_user.favorite_posts
    end
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

  def searchDogOrCat
    params[:dogOrCat]
  end

  def petBreed
    params[:petBreed]
  end

  def petAge
    params[:petAge]
  end
  
  def petGender
    params[:petGender]
  end

  # def searchStuff
  #   params[:filters]
  # end
end