class Api::PostsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update]

  def index
    if searchDogOrCat == "" && petBreed == "" && petAge.length == 20 && petGender == ""
      @posts = Post.all
    elsif searchDogOrCat != "" && petBreed == "" && petAge.length == 20 && petGender == ""
      @posts = Post.fetchDogOrCat(searchDogOrCat)
    elsif searchDogOrCat != "" && petBreed  != "" && petAge.length == 20 && petGender == ""
      @posts = Post.fetchDogOrCatBreed(searchDogOrCat, petBreed)
    elsif searchDogOrCat != "" && petBreed  != "" && petAge.length < 20 && petGender == ""
      @posts = Post.fetchDogOrCatBreedAge(searchDogOrCat, petBreed, petAge)
    elsif searchDogOrCat != "" && petBreed  != "" && petAge.length == 20 && petGender != "" 
      @posts = Post.fetchDogOrCatBreedGender(searchDogOrCat, petBreed, petGender)
    elsif searchDogOrCat != "" && petBreed  != "" && petAge.length < 20 && petGender != "" 
      @posts = Post.fetchDogOrCatBreedAgeGender(searchDogOrCat, petBreed, petAge, petGender)
    elsif searchDogOrCat != "" && petBreed == "" && petAge.length < 20 && petGender == ""
      @posts = Post.fetchDogOrCatAge(searchDogOrCat, petAge)
    elsif searchDogOrCat != "" && petBreed == "" && petAge.length < 20 && petGender != "" 
      @posts = Post.fetchDogOrCatAgeGender(searchDogOrCat, petAge, petGender)
    elsif searchDogOrCat != "" && petBreed == "" && petAge.length == 20 && petGender != "" 
      @posts = Post.fetchDogOrCatGender(searchDogOrCat, petGender)
    elsif searchDogOrCat == "" && petBreed  != "" && petAge.length == 20 && petGender == ""
      @posts = Post.fetchBreed(petBreed)
    elsif searchDogOrCat == "" && petBreed == "" && petAge.length < 20 && petGender == ""
      @posts = Post.fetchAge(petAge)
    elsif searchDogOrCat == "" && petBreed == "" && petAge.length == 20 && petGender != "" 
      @posts = Post.fetchGender(petGender)
    elsif searchDogOrCat == "" && petBreed == "" && petAge.length < 20 && petGender != "" 
      @posts = Post.fetchAgeGender(petAge, petGender)
    elsif searchDogOrCat == "" && petBreed != "" && petAge.length == 20 && petGender != "" 
      @posts = Post.fetchGenderBreed(petBreed, petGender)
    elsif searchDogOrCat == "" && petBreed  != "" && petAge.length < 20 && petGender == "" 
      @posts = Post.fetchAgeBreed(petAge, petBreed)
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

    if !@post.save
      render json: ["Missing pet name"], status: 401
    end
  end

  def update
    @post = Post.with_attached_photos.find(params[:id])
    @favorites = current_user.favorite_posts

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
    if params[:petAge] == ""
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    elsif params[:petAge] == "Baby"
      return [1]
    elsif params[:petAge] == "Young"
      return [2, 3]
    elsif params[:petAge] == "Adult"
      return [4, 5, 6, 7, 8, 9, 10]
    else
      return [11, 12, 13, 14, 15, 16, 17, 18, 19 ,20]
    end
  end
  
  def petGender
    params[:petGender]
  end

end