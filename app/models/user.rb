class User < ApplicationRecord

  validates :password_digest, :session_token, :first_name, :last_name, :zip_code, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :posts,
    foreign_key: :post_id,
    class_name: :Post

  has_many :favorites

  has_many :favorite_posts,
    through: :favorites,
    source: :post

  has_many :messages,
    foreign_key: :receiver_id,
    class_name: :Message

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
