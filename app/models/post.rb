class Post < ApplicationRecord

  validates :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :favorites

  has_many_attached :photos


  def self.fetchDogOrCat(searchDogOrCat)
    Post.where("dog_or_cat LIKE ?", searchDogOrCat)
  end

  def self.fetchBreed(searchDogOrCat, petBreed)
    self.where("pet_breed LIKE ?", petBreed)
  end

  def self.fetchDogOrCatBreed(searchDogOrCat, petBreed)
    self.where("dog_or_cat LIKE ?
            AND pet_breed LIKE ?", searchDogOrCat, petBreed)
  end

  def self.fetchDogOrCatBreedAge(searchDogOrCat, petBreed, petAge)
    self.where("dog_or_cat LIKE ?
            AND pet_breed LIKE ?
            AND pet_age LIKE ?", searchDogOrCat, petBreed, petAge)
  end

  def self.fetchDogOrCatBreedGender(searchDogOrCat, petBreed, petGender)
    self.where("dog_or_cat LIKE ?
            AND pet_breed LIKE ?
            AND pet_gender LIKE ?", searchDogOrCat, petBreed, petGender)
  end

  def self.fetchDogOrCatBreedAgeGender(searchDogOrCat, petBreed, petAge, petGender)
    self.where("dog_or_cat LIKE ?
            AND pet_breed LIKE ?
            AND pet_age LIKE ?
            AND pet_gender LIKE ?", searchDogOrCat, petBreed, petAge, petGender)
  end

  def self.fetchDogOrCatAgeGender(searchDogOrCat, petAge, petGender)
    self.where("dog_or_cat LIKE ?
            AND pet_age LIKE ?
            AND pet_gender LIKE ?", searchDogOrCat, petAge, petGender)
  end

  def self.fetchDogOrCatGender(searchDogOrCat, petGender)
    self.where("dog_or_cat LIKE ?
            AND pet_gender LIKE ?", searchDogOrCat, petGender)
  end

  def self.fetchDogOrCatAge(searchDogOrCat, petAge)
    # if petAge === "Baby"
    #   petAge = 2
    # elsif petAge === "Young"
    #   petAge = 5
    # end

    self.where("dog_or_cat LIKE ?
            AND pet_age < ?", searchDogOrCat, petAge)
  end

  def self.fetchAge(petAge)
    self.where("pet_age LIKE ?", petAge)
  end

  def self.fetchAgeGender(petAge, petGender)
    self.where("pet_age LIKE ?
            AND pet_gender LIKE ?", petAge, petGender)
  end

  def self.fetchAgeBreed(petAge, petBreed)
    self.where("pet_age LIKE ?
            AND pet_breed LIKE ?", petAge, petBreed)
  end

  def self.fetchGender(petGender)
    self.where("pet_gender LIKE ?", petGender)
  end

  def self.fetchGenderBreed(petBreed, petGender)
    self.where("pet_breed LIKE ?
            AND pet_gender LIKE ?", petBreed, petGender)
  end

end
