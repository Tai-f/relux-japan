class AddColumnToHotel < ActiveRecord::Migration[5.0]
  def change
    add_column :hotels, :location_latitude, :decimal
    add_column :hotels, :location_longitude, :decimal
    add_column :hotels, :access_by_public, :text
    add_column :hotels, :access_by_car, :text
    add_column :hotels, :concept, :text
    add_column :hotels, :description, :text
    add_column :hotels, :plan, :text
  end
end
