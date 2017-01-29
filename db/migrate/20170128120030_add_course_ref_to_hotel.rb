class AddCourseRefToHotel < ActiveRecord::Migration[5.0]
  def change
    add_reference :hotels, :course, foreign_key: true
  end
end
