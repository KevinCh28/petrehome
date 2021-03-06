class Message < ApplicationRecord

  validates :author_id, :receiver_id, presence: true
  validates :body, length: { minimum: 10 }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :receiver,
    foreign_key: :receiver_id,
    class_name: :User

end
