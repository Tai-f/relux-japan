class Selection < ApplicationRecord
  has_many :hotels, through: :hotel_selections
  has_many :hotel_selections
end
