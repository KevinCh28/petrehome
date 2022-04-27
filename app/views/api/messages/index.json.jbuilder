@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :author_id, :receiver_id, :body
  end
end