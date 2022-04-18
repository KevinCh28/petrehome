# json.posts = ({})

@favorites.each do |favorite|
  json.set! favorite.id do
    json.partial! "api/favorites/favorite", favorite: favorite

    # favorite.post do
    #   json.set! favorite.post.id do
    #     json.partial! "api/posts/post", post: favorite.post
    #       json.extract! favorite.post, :id, :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat
    #     json.photoUrls fav_pos.photo.map { |file| url_for(file) }
    #   end
    # end
    
  end
end

json.posts do
  @favorites.each do |favorite|
    favorite.post do |fav_post|
      json.set! fav_post.id do
        json.partial! "api/posts/post", post: fav_post
      end
    end
  end
end

