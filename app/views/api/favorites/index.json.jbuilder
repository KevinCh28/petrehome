@favorites.each do |favorite|
  json.set! favorite.id do
    json.partial! "api/favorites/favorite", favorite: favorite
  end
end

json.posts do
  @favorites.each do |favorite|
    favorite.post do |fav_post|
      json.set! fav_post.id do
        json.partial! "api/posts/post", post: fav_post
        json.photoUrls fav_post.photos.map { |file| url_for(file)}
      end
    end
  end
end

