class Hotel < ApplicationRecord
  mount_uploader :image, ImageUploader
end
