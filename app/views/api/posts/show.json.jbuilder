json.partial! 'post', post: @post

json.photoUrls @post.photos.map { |file| url_for(file)}

if current_user
  json.favPosts @favorites.include?(@post)
end