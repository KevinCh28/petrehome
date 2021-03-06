class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.string :user_id, null: false
      t.string :post_id, null: false

      t.timestamps
    end

    add_index :follows, :user_id
    add_index :follows, :post_id
  end
end
