class UpdateMessage < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :author_name, :string, null: false
  end
end
