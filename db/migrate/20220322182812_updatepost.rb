class Updatepost < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :type, :dog_or_cat
  end
end
