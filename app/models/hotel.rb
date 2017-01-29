class Hotel < ApplicationRecord
  has_many :selections, through: :hotel_selections
  has_many :hotel_selections
  has_many :photos
  mount_uploader :image, ImageUploader
end
