class Messages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false
      t.integer :sender_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :messages, :author_id
    add_index :messages, :sender_id
  end
end
