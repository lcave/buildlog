class User < ApplicationRecord
  before_save { self.email = email.downcase }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  has_secure_password
  validates :password, length: { minimum: 8 }

  has_many :build_threads
  has_many :refresh_tokens, dependent: :delete_all
end
