class CreateHotels < ActiveRecord::Migration[5.0]
  def change
    create_table :hotels do |t|
      t.string :name, null:false
      t.string :hiragana_name, null:false
      t.string :prefecture, null:false
      t.string :city, null:false
      t.string :street, null:false
      t.integer :phone_number, null:false
      t.string :url
      t.time :check_in_time
      t.time :check_out_time
      t.integer :total_rooms
      t.string :card_type
      t.integer :grade
      t.text :amenity
      t.text :cancel
      t.timestamps
    end
  end
end
