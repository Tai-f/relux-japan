class CreateHotelSelections < ActiveRecord::Migration[5.0]
  def change
    create_table :hotel_selections do |t|
      t.references :hotel, foreign_key: true
      t.references :selection, foreign_key: true
      t.timestamps
    end
  end
end
