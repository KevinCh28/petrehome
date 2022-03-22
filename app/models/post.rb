class Post < ApplicationRecord

  validates :pet_name, :pet_age, :pet_gender, :pet_breed, :type, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :user_id

  # has_many :follows

end
