class Favorite < ApplicationRecord

  validates :user_id, :post_id, presence: true

  belongs_to :post

  belongs_to :user

end
