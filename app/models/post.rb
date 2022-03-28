class Post < ApplicationRecord

  validates :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :favorites,
    foreign_key: :post_id,
    class_name: :Favorite

  has_many_attached :photos

end
