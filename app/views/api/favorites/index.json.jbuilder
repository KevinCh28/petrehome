@favorites.each do |favorite|
  json.set! favorite.id do
    json.partial! "api/favorites/favorite", favorite: favorite
  end
end

# json.posts do
#   favorite.posts.each do |post|
#     json.set! post.post_id do
#       json.extract! post, :id, :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat
#     end
#   end
# end