# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Post.destroy_all
# Follow.destroy_all

demo = User.create({email: "demo@mail.com", password: "password", first_name: "banana", last_name: "peel", zip_code: 10001});
user1 = User.create({email: "doglover@mail.com", password: "password", first_name: "Bob", last_name: "Builder", zip_code: 10001});
user2 = User.create({email: "catlover@mail.com", password: "password", first_name: "Adam", last_name: "West", zip_code: 10001});
user3 = User.create({email: "fluffylover@mail.com", password: "password", first_name: "King", last_name: "Kong", zip_code: 10001});

post1 = Post.create({pet_name: "Mango", pet_gender: "M", pet_breed: "Yorkshire Terrier", pet_age: "9", dog_or_cat: "dog", author_id: "1"});
post2 = Post.create({pet_name: "Mimi", pet_gender: "F", pet_breed: "British Shorthair", pet_age: "2", dog_or_cat: "cat", author_id: "1"});
post3 = Post.create({pet_name: "Nugget", pet_gender: "M", pet_breed: "Corgi", pet_age: "5", dog_or_cat: "dog", author_id: "1"});
post4 = Post.create({pet_name: "Coyote", pet_gender: "F", pet_breed: "Pomsky", pet_age: "2", dog_or_cat: "dog", author_id: "1"});

