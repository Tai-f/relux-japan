class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.text :body, null:false
      t.integer :rate, null:false
      t.string :accommodation_date, null:false
      t.references :hotel, foreign_key: true
      t.timestamps
    end
  end
end
