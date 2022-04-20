json.partial! "api/favorites/favorite", favorite: @favorite

# json.photoUrls @post.photos.map { |file| url_for(file)}