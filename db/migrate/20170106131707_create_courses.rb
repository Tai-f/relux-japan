class CreateCourses < ActiveRecord::Migration[5.0]
  def change
    create_table :courses do |t|
      t.string :name, null:false
      t.string :kanji_name, null:false
      t.string :theme, null:false
      t.integer :price, null:false
      t.text :body, null:false
      t.timestamps
    end
  end
end
