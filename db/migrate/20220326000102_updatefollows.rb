class Updatefollows < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :pet_age, :integer, using: 'pet_age::integer'
    change_column :posts, :author_id, :integer, using: 'author_id::integer'
    
    drop_table :follows

  end
end
