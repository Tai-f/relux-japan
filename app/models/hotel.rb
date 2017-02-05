class Hotel < ApplicationRecord
  has_many :selections, through: :hotel_selections
  has_many :hotel_selections
  has_many :photos
  has_many :rooms
  has_many :reviews
  mount_uploader :image, ImageUploader
end
