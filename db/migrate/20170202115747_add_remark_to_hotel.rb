class AddRemarkToHotel < ActiveRecord::Migration[5.0]
  def change
    add_column :hotels, :remark, :text
  end
end
