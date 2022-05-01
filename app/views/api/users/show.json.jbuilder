json.partial! "api/users/user", user: @user
# json.extract! @user, :id, :first_name

json.messages do
  @user.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :body, :author_id, :receiver_id, :author_name
    end
  end
end

json.favorite_posts do
  @user.favorite_posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat, :author_id
      json.photoUrls post.photos.map { |file| url_for(file)}
    end
  end
end