class Post < ApplicationRecord

  validates :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :favorites

  has_many_attached :photos

  def self.fetch(dogOrCat)
    self.where("dog_or_cat LIKE ?", dogOrCat)
  end

  # def self.fetchBreed(dogOrCat, petBreed)
  #   self.where("dog_or_cat LIKE ?", dogOrCat)
  #       AND ("pet_breed LIKE ?", petBreed)
  # end

  # def self.fetchBreedAge(dogOrCat, petBreed, petAge)
  #   self.where("dog_or_cat LIKE ?", dogOrCat)
  #       AND ("pet_breed LIKE ?", petBreed)
  #       AND ("pet_age LIKE ?", petAge)
  # end

  # def self.fetchBreedGender(dogOrCat, petBreed, petGender)
  #   self.where("dog_or_cat LIKE ?", dogOrCat)
  #       AND ("pet_breed LIKE ?", petBreed)
  #       AND ("pet_gender LIKE ?", petGender)
  # end

  # def self.fetchBreedAgeGender(dogOrCat, petBreed, petAge, petGender)
  #   self.where("dog_or_cat LIKE ?", dogOrCat)
  #       AND ("pet_breed LIKE ?", petBreed)
  #       AND ("pet_age LIKE ?", petAge)
  #       AND ("pet_gender LIKE ?", petGender)
  # end

  # def self.fetchAge(dogOrCat, petAge)
  #   self.where("dog_or_cat LIKE ?", dogOrCat)
  #       AND ("pet_age LIKE ?", petAge)
  # end

  # def self.fetchAgeGender(dogOrCat, petAge, petGender)
  #   self.where("dog_or_cat LIKE ?", dogOrCat)
  #       AND ("pet_age LIKE ?", petAge)
  #       AND ("pet_gender LIKE ?", petGender)
  # end

  # def self.fetchGender(dogOrCat, petGender)
  #   self.where("dog_or_cat LIKE ?", dogOrCat)
  #       AND ("pet_gender LIKE ?", petGender)
  # end

  # def self.fetchWithFilters(searchStuff)
  #   Post.where("dog_or_cat LIKE ?", searchStuff[:dogOrCat])
  #       .and("pet_breed LIKE ?", searchStuff[:petBreed])
  #       .and("pet_age LIKE ?", searchStuff[:petAge])
  #       .and("pet_gender LIKE ?", searchStuff[:petGender])
  # end

  # def self.fetchWithFilters(searchStuff)
  #   Post.where("dog_or_cat IN ? 
  #     AND pet_breed IN ?
  #     AND pet_age IN ?
  #     AND pet_gender IN ?", 
  #     [searchStuff[:dogOrCat], searchStuff[:petBreed], searchStuff[:petAge], searchStuff[:petGender]])
  # end
end
