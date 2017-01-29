class ChangeColumnToHotel < ActiveRecord::Migration[5.0]
  def change
    change_column :hotels, :phone_number, :string
  end
end
