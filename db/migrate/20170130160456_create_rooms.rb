class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.references :hotel, foreign_key: true
      t.string :name, null:false
      t.string :image
      t.integer :price, null:false
      t.text :body
      t.text :feature
      t.text :room_type
      t.integer :maximum_room_number
      t.timestamps
    end
  end
end
