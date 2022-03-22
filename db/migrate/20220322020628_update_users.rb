class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :zip_code, :integer, null: false
    add_column :posts, :type, :string, null: false
  end
end
