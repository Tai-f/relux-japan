#各ホテルのカラム
json.extract! @hotel, :id, :name, :hiragana_name, :prefecture, :city, :street, :phone_number, :url, :check_in_time, :check_out_time, :total_rooms, :card_type, :grade, :amenity, :cancel, :location_latitude, :location_longitude, :access_by_public, :access_by_car, :concept, :description, :plan, :remark
#各ホテルの部屋のカラム
json.rooms do
  json.array!(@hotel.rooms) do |room|
    json.extract! room, :id, :name, :image, :price, :body, :feature, :room_type, :maximum_room_number
  end
end

