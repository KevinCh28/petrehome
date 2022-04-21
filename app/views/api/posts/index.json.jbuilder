@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    json.photoUrls post.photos.map { |file| url_for(file)}
  end
end