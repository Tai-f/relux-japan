class ChangeDataTypeOfColumnToHotel < ActiveRecord::Migration[5.0]
  def change
    change_column :hotels, :check_in_time, :string
    change_column :hotels, :check_out_time, :string
  end
end
