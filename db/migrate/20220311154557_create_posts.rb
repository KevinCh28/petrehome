class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :pet_name, null: false
      t.string :pet_gender, null: false
      t.string :pet_breed, null: false
      t.string :pet_age, null: false
      t.string :author_id, null: false

      t.timestamps
    end

    add_index :posts, :author_id
  end
end
