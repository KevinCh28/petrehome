# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Post.destroy_all
Favorite.destroy_all
Message.destroy_all

demo = User.create({email: "demo@mail.com", password: "password", first_name: "banana", last_name: "peel", zip_code: 10001});
user1 = User.create({email: "doglover@mail.com", password: "password", first_name: "Bob", last_name: "Builder", zip_code: 10001});
user2 = User.create({email: "catlover@mail.com", password: "password", first_name: "Adam", last_name: "West", zip_code: 10001});
user3 = User.create({email: "fluffylover@mail.com", password: "password", first_name: "King", last_name: "Kong", zip_code: 10001});

post1 = Post.create({pet_name: "Mango", pet_gender: "Male", pet_breed: "Yorkshire Terrier", pet_age: 9, dog_or_cat: "Dog", author_id: user1.id});
post2 = Post.create({pet_name: "Mimi", pet_gender: "Female", pet_breed: "British Shorthair", pet_age: 2, dog_or_cat: "Cat", author_id: user1.id});
post3 = Post.create({pet_name: "Nugget", pet_gender: "Male", pet_breed: "Corgi", pet_age: 5, dog_or_cat: "Dog", author_id: user1.id});
post4 = Post.create({pet_name: "Coyote", pet_gender: "Female", pet_breed: "Pomsky", pet_age: 2, dog_or_cat: "Dog", author_id: demo.id});
post5 = Post.create({pet_name: "Drogo", pet_gender: "Male", pet_breed: "American Shorthair", pet_age: 2, dog_or_cat: "Cat", author_id: demo.id});

fav1 = Favorite.create({user_id: demo.id, post_id: post1.id});
fav2 = Favorite.create({user_id: demo.id, post_id: post2.id});
fav3 = Favorite.create({user_id: demo.id, post_id: post3.id});
fav4 = Favorite.create({user_id: user1.id, post_id: post4.id});

msg1 = Message.create({author_id: user1.id, receiver_id: demo.id, body: "Hello, I am interested in Coyote"})
msg2 = Message.create({author_id: user2.id, receiver_id: demo.id, body: "Hello, I am interested in Drogo"})

post1.photos.attach(io: open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/yorkie01.png'), filename: 'yorkie01.png');
post1.photos.attach(io: open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/yorkie02.jpeg'), filename: 'yorkie02.jpeg');

post2.photos.attach(io: open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair01.jpg'), filename: 'britishshorthair01.jpg');
post2.photos.attach(io: open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair02.jpg'), filename: 'britishshorthair02.jpg');

post3.photos.attach(io: open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi01.jpg'), filename: 'corgi01.jpg');
post3.photos.attach(io: open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi02.jpg'), filename: 'corgi02.jpg');

post4.photos.attach(io: open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/pomsky01.png'), filename: 'pomsky01.png');
post4.photos.attach(io: open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/pomsky02.png'), filename: 'pomsky02.png');

