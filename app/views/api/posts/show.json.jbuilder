json.partial! 'post', post: @post

json.photoUrls @post.photos.map { |file| url_for(file)}