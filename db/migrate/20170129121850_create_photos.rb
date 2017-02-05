class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :image, null:false
      t.references :hotel, foreign_key: true
      t.timestamps
    end
  end
end
