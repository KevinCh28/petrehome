# json.set! favorite.id do
#   json.partial! "api/favorites/favorite", favorite: favorite
# end

json.partial! "api/favorites/favorite", favorite: @favorite

# json.favorites do
#   @favorites.each do |favorite|
#     json.partial! "api/favorites/favorite", favorite: favorite
#   end
# end

json.posts do
  favorite.posts.each do |post|
    json.set! favorite.post.id do
      json.extract! favorite.post, :id, :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat
    end
  end
end

# json.posts do
#   @favorites.each do |favorite|
#     json.set! favorite.post.id do
#       json.extract! favorite.post, :id, :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat
#     end
#   end
# end

# payload in reducer