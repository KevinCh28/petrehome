@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    # json.followIds []
  end
end

# @posts.each do |post|
#   json.set! post.id do
#     json.extract! post, :id, :pet_name, :pet_age, :pet_gender, :pet_breed, :dog_or_cat
#   end
# end