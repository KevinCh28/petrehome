class UpdateMessages < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :sender_id, :receiver_id
  end
end
