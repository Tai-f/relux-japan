class ChangeColumnDefaultToHotel < ActiveRecord::Migration[5.0]
  def change
    change_column :hotels, :location_latitude, :decimal, precision: 15, scale: 12
    change_column :hotels, :location_longitude, :decimal, precision: 15, scale: 12
  end
end
