class Post < ApplicationRecord

  validates :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :favorites

  has_many_attached :photos

end
