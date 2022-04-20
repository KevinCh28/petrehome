json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :pet_name, :pet_age, :pet_breed, :pet_gender
      json.photoUrls post.photos.map { |file| url_for(file) }
    end
  end
end