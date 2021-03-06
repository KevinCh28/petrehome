@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    # json.photoUrls post.photos.map { |file| url_for(file)}
    json.photoUrls [url_for(post.photos[0])]
  end
end