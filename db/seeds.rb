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
post2 = Post.create({pet_name: "Mimi", pet_gender: "Female", pet_breed: "American Shorthair", pet_age: 1, dog_or_cat: "Cat", author_id: user1.id});
post3 = Post.create({pet_name: "Nugget", pet_gender: "Male", pet_breed: "Corgi", pet_age: 5, dog_or_cat: "Dog", author_id: user1.id});
post4 = Post.create({pet_name: "Coyote", pet_gender: "Female", pet_breed: "Pomsky", pet_age: 2, dog_or_cat: "Dog", author_id: demo.id});
post5 = Post.create({pet_name: "Lily", pet_gender: "Female", pet_breed: "Corgi", pet_age: 11, dog_or_cat: "Dog", author_id: user3.id});
post6 = Post.create({pet_name: "Wade Wilson", pet_gender: "Male", pet_breed: "Corgi", pet_age: 6, dog_or_cat: "Dog", author_id: user3.id});
post7 = Post.create({pet_name: "Ein", pet_gender: "Male", pet_breed: "Corgi", pet_age: 7, dog_or_cat: "Dog", author_id: user3.id});
post8 = Post.create({pet_name: "Daisy", pet_gender: "Female", pet_breed: "Corgi", pet_age: 6, dog_or_cat: "Dog", author_id: user3.id});
post9 = Post.create({pet_name: "Scooby", pet_gender: "Male", pet_breed: "Corgi", pet_age: 2, dog_or_cat: "Dog", author_id: user3.id});
post10 = Post.create({pet_name: "Yoshi", pet_gender: "Male", pet_breed: "Shiba Inu", pet_age: 6, dog_or_cat: "Dog", author_id: demo.id});
post11 = Post.create({pet_name: "Cooper", pet_gender: "Male", pet_breed: "Shiba Inu", pet_age: 3, dog_or_cat: "Dog", author_id: user1.id});
post12 = Post.create({pet_name: "Elon", pet_gender: "Male", pet_breed: "Shiba Inu", pet_age: 2, dog_or_cat: "Dog", author_id: user1.id});
post13 = Post.create({pet_name: "Granger", pet_gender: "Male", pet_breed: "Shiba Inu", pet_age: 1, dog_or_cat: "Dog", author_id: user1.id});
post14 = Post.create({pet_name: "Hetty", pet_gender: "Male", pet_breed: "Shiba Inu", pet_age: 3, dog_or_cat: "Dog", author_id: user1.id});
post15 = Post.create({pet_name: "Lily", pet_gender: "Female", pet_breed: "Shiba Inu", pet_age: 12, dog_or_cat: "Dog", author_id: user1.id});
post16 = Post.create({pet_name: "Sammy", pet_gender: "Male", pet_breed: "Shiba Inu", pet_age: 1, dog_or_cat: "Dog", author_id: user1.id});
post17 = Post.create({pet_name: "Max", pet_gender: "Male", pet_breed: "Border Collie", pet_age: 1, dog_or_cat: "Dog", author_id: user2.id});
post18 = Post.create({pet_name: "Munson", pet_gender: "Male", pet_breed: "Border Collie", pet_age: 1, dog_or_cat: "Dog", author_id: user2.id});
post19 = Post.create({pet_name: "Bella", pet_gender: "Female", pet_breed: "Border Collie", pet_age: 2, dog_or_cat: "Dog", author_id: user2.id});
post20 = Post.create({pet_name: "Indy", pet_gender: "Female", pet_breed: "Border Collie", pet_age: 3, dog_or_cat: "Dog", author_id: user2.id});
post21 = Post.create({pet_name: "Ariel", pet_gender: "Female", pet_breed: "Border Collie", pet_age: 2, dog_or_cat: "Dog", author_id: demo.id});
post22 = Post.create({pet_name: "Charles", pet_gender: "Male", pet_breed: "Border Collie", pet_age: 3, dog_or_cat: "Dog", author_id: user2.id});
post23 = Post.create({pet_name: "Chance", pet_gender: "Male", pet_breed: "Border Collie", pet_age: 5, dog_or_cat: "Dog", author_id: user2.id});
post24 = Post.create({pet_name: "Max", pet_gender: "Male", pet_breed: "Border Collie", pet_age: 10, dog_or_cat: "Dog", author_id: user2.id});
post25 = Post.create({pet_name: "Buddy", pet_gender: "Male", pet_breed: "Border Collie", pet_age: 11, dog_or_cat: "Dog", author_id: user2.id});
post26 = Post.create({pet_name: "Clara", pet_gender: "Female", pet_breed: "German Shepherd", pet_age: 1, dog_or_cat: "Dog", author_id: user2.id});
post27 = Post.create({pet_name: "Mutti", pet_gender: "Female", pet_breed: "German Shepherd", pet_age: 2, dog_or_cat: "Dog", author_id: user2.id});
post28 = Post.create({pet_name: "Madeline", pet_gender: "Female", pet_breed: "German Shepherd", pet_age: 3, dog_or_cat: "Dog", author_id: user2.id});
post29 = Post.create({pet_name: "Bebe", pet_gender: "Male", pet_breed: "German Shepherd", pet_age: 6, dog_or_cat: "Dog", author_id: user2.id});
post30 = Post.create({pet_name: "John John", pet_gender: "Male", pet_breed: "German Shepherd", pet_age: 7, dog_or_cat: "Dog", author_id: user2.id});
post31 = Post.create({pet_name: "Shocka", pet_gender: "Male", pet_breed: "German Shepherd", pet_age: 11, dog_or_cat: "Dog", author_id: user2.id});
post32 = Post.create({pet_name: "Bear", pet_gender: "Male", pet_breed: "German Shepherd", pet_age: 12, dog_or_cat: "Dog", author_id: demo.id});
post33 = Post.create({pet_name: "Cowboy", pet_gender: "Male", pet_breed: "German Shepherd", pet_age: 1, dog_or_cat: "Dog", author_id: user2.id});
post34 = Post.create({pet_name: "Nik", pet_gender: "Male", pet_breed: "American Shorthair", pet_age: 1, dog_or_cat: "Cat", author_id: user1.id});
post35 = Post.create({pet_name: "Pumpkin", pet_gender: "Male", pet_breed: "American Shorthair", pet_age: 1, dog_or_cat: "Cat", author_id: user1.id});
post36 = Post.create({pet_name: "Belka", pet_gender: "Female", pet_breed: "American Shorthair", pet_age: 3, dog_or_cat: "Cat", author_id: user1.id});
post37 = Post.create({pet_name: "Blondie James", pet_gender: "Male", pet_breed: "American Shorthair", pet_age: 3, dog_or_cat: "Cat", author_id: user1.id});
post38 = Post.create({pet_name: "Ninja", pet_gender: "Male", pet_breed: "American Shorthair", pet_age: 6, dog_or_cat: "Cat", author_id: user1.id});
post39 = Post.create({pet_name: "Spencer", pet_gender: "Male", pet_breed: "American Shorthair", pet_age: 6, dog_or_cat: "Cat", author_id: user1.id});
post40 = Post.create({pet_name: "Earnest", pet_gender: "Male", pet_breed: "American Shorthair", pet_age: 16, dog_or_cat: "Cat", author_id: user1.id});
post41 = Post.create({pet_name: "Refrigerator", pet_gender: "Male", pet_breed: "American Shorthair", pet_age: 10, dog_or_cat: "Cat", author_id: user1.id});
post42 = Post.create({pet_name: "Peach Fuzz", pet_gender: "Female", pet_breed: "Abyssinian", pet_age: 1, dog_or_cat: "Cat", author_id: user1.id});
post43 = Post.create({pet_name: "Bindi", pet_gender: "Female", pet_breed: "Abyssinian", pet_age: 6, dog_or_cat: "Cat", author_id: user1.id});
post44 = Post.create({pet_name: "Molly", pet_gender: "Female", pet_breed: "Abyssinian", pet_age: 2, dog_or_cat: "Cat", author_id: demo.id});
post45 = Post.create({pet_name: "Mark", pet_gender: "Male", pet_breed: "Abyssinian", pet_age: 2, dog_or_cat: "Cat", author_id: user1.id});
post46 = Post.create({pet_name: "Kid", pet_gender: "Female", pet_breed: "Abyssinian", pet_age: 6, dog_or_cat: "Cat", author_id: user1.id});
post47 = Post.create({pet_name: "Iris", pet_gender: "Female", pet_breed: "British Shorthair", pet_age: 7, dog_or_cat: "Cat", author_id: user1.id});
post48 = Post.create({pet_name: "Remy", pet_gender: "Female", pet_breed: "British Shorthair", pet_age: 2, dog_or_cat: "Cat", author_id: user1.id});
post49 = Post.create({pet_name: "Cabbage", pet_gender: "Male", pet_breed: "British Shorthair", pet_age: 3, dog_or_cat: "Cat", author_id: user1.id});
post50 = Post.create({pet_name: "Lily", pet_gender: "Female", pet_breed: "British Shorthair", pet_age: 2, dog_or_cat: "Cat", author_id: user1.id});
post51 = Post.create({pet_name: "Tigger", pet_gender: "Female", pet_breed: "British Shorthair", pet_age: 9, dog_or_cat: "Cat", author_id: user1.id});
post52 = Post.create({pet_name: "GERALT", pet_gender: "Male", pet_breed: "British Shorthair", pet_age: 1, dog_or_cat: "Cat", author_id: user1.id});
post53 = Post.create({pet_name: "Dante", pet_gender: "Male", pet_breed: "British Shorthair", pet_age: 8, dog_or_cat: "Cat", author_id: user1.id});
post54 = Post.create({pet_name: "Griffin [Snaggletooth ^.^]", pet_gender: "Male", pet_breed: "British Shorthair", pet_age: 3, dog_or_cat: "Cat", author_id: user1.id});
post55 = Post.create({pet_name: "June Bug", pet_gender: "Female", pet_breed: "British Shorthair", pet_age: 2, dog_or_cat: "Cat", author_id: user1.id});
post56 = Post.create({pet_name: "Hunter", pet_gender: "Female", pet_breed: "British Shorthair", pet_age: 12, dog_or_cat: "Cat", author_id: user1.id});

fav1 = Favorite.create({user_id: demo.id, post_id: post1.id});
fav2 = Favorite.create({user_id: demo.id, post_id: post2.id});
fav3 = Favorite.create({user_id: demo.id, post_id: post3.id});
fav4 = Favorite.create({user_id: user1.id, post_id: post4.id});

msg1 = Message.create({author_id: user1.id, receiver_id: demo.id, body: "Hello, I am interested in adopting Coyote, is she still available for adoption?", author_name: user1.first_name});
msg2 = Message.create({author_id: user2.id, receiver_id: demo.id, body: "Hello, is Ariel a pure breed border collie?", author_name: user2.first_name});
msg3 = Message.create({author_id: user3.id, receiver_id: demo.id, body: "Molly is so cute! Does she have all her vaccinations?", author_name: user3.first_name});

post1.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/yorkie01.png'), filename: 'yorkie01.png');
post1.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/yorkie02.jpeg'), filename: 'yorkie02.jpeg');

post2.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+mimi+01.jpeg'), filename: 'americanshorthair mimi 01.jpeg');
post2.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+mimi+02.jpeg'), filename: 'americanshorthair mimi 02.jpeg');
post2.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+mimi+03.jpeg'), filename: 'americanshorthair mimi 03.jpeg');

post3.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi01.jpg'), filename: 'corgi01.jpg');
post3.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi02.jpg'), filename: 'corgi02.jpg');

post4.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/pomsky01.png'), filename: 'pomsky01.png');
post4.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/pomsky02.png'), filename: 'pomsky02.png');

post5.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+lily+01.jpeg'), filename: 'corgi lily 01.jpeg');
post5.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+lily+02.jpeg'), filename: 'corgi lily 02.jpeg');
post5.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+lily+03.jpeg'), filename: 'corgi lily 03.jpeg');

post6.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+wade+wilson+01.jpeg'), filename: 'corgi wade wilson 03.jpeg');
post6.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+wade+wilson+02.jpeg'), filename: 'corgi wade wilson 03.jpeg');
post6.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+wade+wilson+03.jpeg'), filename: 'corgi wade wilson 03.jpeg');
post6.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+wade+wilson+04.jpeg'), filename: 'corgi wade wilson 03.jpeg');
post6.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+wade+wilson+05.jpeg'), filename: 'corgi wade wilson 03.jpeg');
post6.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+wade+wilson+06.jpeg'), filename: 'corgi wade wilson 03.jpeg');

post7.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+ein+01.jpeg'), filename: 'corgi ein 01.jpeg');
post7.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+ein+02.jpeg'), filename: 'corgi ein 02.jpeg');

post8.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+daisy+01.jpeg'), filename: 'corgi daisy 01.jpeg');
post8.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+daisy+02.jpeg'), filename: 'corgi daisy 02.jpeg');

post9.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+ein+01.jpeg'), filename: 'corgi ein 01.jpeg');
post9.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/corgi+ein+02.jpeg'), filename: 'corgi ein 02.jpeg');

post10.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+yoshi+01.jpeg'), filename: 'shiba yoshi 01.jpeg');
post10.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+yoshi+02.jpeg'), filename: 'shiba yoshi 02.jpeg');
post10.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+yoshi+03.jpeg'), filename: 'shiba yoshi 03.jpeg');

post11.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+cooper+01.jpeg'), filename: 'shiba cooper 01.jpeg');
post11.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+cooper+02.jpeg'), filename: 'shiba cooper 02.jpeg');

post12.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+elon+01.jpeg'), filename: 'shiba elon 01.jpeg');
post12.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+elon+02.jpeg'), filename: 'shiba elon 02.jpeg');
post12.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+elon+03.jpeg'), filename: 'shiba elon 03.jpeg');
post12.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+elon+04.jpeg'), filename: 'shiba elon 04.jpeg');
post12.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+elon+05.jpeg'), filename: 'shiba elon 05.jpeg');

post13.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+granger+01.jpeg'), filename: 'shiba granger 01.jpeg');

post14.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+hetty+01.jpeg'), filename: 'shiba hetty 01.jpeg');
post14.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+hetty+02.jpeg'), filename: 'shiba hetty 02.jpeg');
post14.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+hetty+03.jpeg'), filename: 'shiba hetty 03.jpeg');

post15.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+lily+01.jpeg'), filename: 'shiba lily 01.jpeg');
post15.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+lily+02.jpeg'), filename: 'shiba lily 02.jpeg');
post15.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+lily+03.jpeg'), filename: 'shiba lily 03.jpeg');

post16.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+sammy+01.jpeg'), filename: 'shiba sammy 01.jpeg');
post16.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+sammy+02.jpeg'), filename: 'shiba sammy 02.jpeg');
post16.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/shiba+sammy+03.jpeg'), filename: 'shiba sammy 03.jpeg');

post17.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+max+01.jpeg'), filename: 'bordercollie max 01.jpeg');
post17.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+max+02.jpeg'), filename: 'bordercollie max 02.jpeg');

post18.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+munson+01.jpeg'), filename: 'bordercollie munson 01.jpeg');

post19.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+bella+01.jpeg'), filename: 'bordercollie bella 01.jpeg');
post19.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+bella+02.jpeg'), filename: 'bordercollie bella 02.jpeg');
post19.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+bella+03.jpeg'), filename: 'bordercollie bella 03.jpeg');

post20.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+indy+01.jpeg'), filename: 'bordercollie indy 01.jpeg');
post20.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+indy+02.jpeg'), filename: 'bordercollie indy 02.jpeg');
post20.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+indy+03.jpeg'), filename: 'bordercollie indy 03.jpeg');

post21.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+ariel+01.jpeg'), filename: 'bordercollie ariel 01.jpeg');
post21.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+ariel+02.jpeg'), filename: 'bordercollie ariel 02.jpeg');
post21.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+ariel+03.jpeg'), filename: 'bordercollie ariel 03.jpeg');

post22.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+charles+01.jpeg'), filename: 'bordercollie charles 01.jpeg');
post22.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+charles+02.jpeg'), filename: 'bordercollie charles 02.jpeg');
post22.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+charles+02.jpeg'), filename: 'bordercollie charles 02.jpeg');

post23.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+chance+01.jpeg'), filename: 'bordercollie chance 01.jpeg');
post23.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+chance+02.jpeg'), filename: 'bordercollie chance 02.jpeg');

post24.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+max2+01.jpeg'), filename: 'bordercollie max2 01.jpeg');
post24.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+max2+02.jpeg'), filename: 'bordercollie max2 02.jpeg');
post24.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+max2+03.jpeg'), filename: 'bordercollie max2 03.jpeg');

post25.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+buddy+01.jpeg'), filename: 'bordercollie buddy 01.jpeg');
post25.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+buddy+02.jpeg'), filename: 'bordercollie buddy 02.jpeg');
post25.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/bordercollie+buddy+03.jpeg'), filename: 'bordercollie buddy 03.jpeg');

post26.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+clara+01.jpeg'), filename: 'german clara 01.jpeg');
post26.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+clara+02.jpeg'), filename: 'german clara 02.jpeg');

post27.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+mutti+01.jpeg'), filename: 'german mutti 01.jpeg');
post27.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+mutti+02.jpeg'), filename: 'german mutti 02.jpeg');
post27.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+mutti+03.jpeg'), filename: 'german mutti 03.jpeg');

post28.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+madeline+01.jpeg'), filename: 'german madeline 01.jpeg');
post28.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+madeline+02.jpeg'), filename: 'german madeline 02.jpeg');

post29.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+bebe+01.jpeg'), filename: 'german bebe 01.jpeg');
post29.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+bebe+02.jpeg'), filename: 'german bebe 02.jpeg');
post29.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+bebe+03.jpeg'), filename: 'german bebe 03.jpeg');

post30.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+john+01.jpeg'), filename: 'german john 01.jpeg');
post30.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+john+02.jpeg'), filename: 'german john 02.jpeg');
post30.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+john+03.jpeg'), filename: 'german john 03.jpeg');

post31.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+shocka+01.jpeg'), filename: 'german shocka 01.jpeg');
post31.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+shocka+02.jpeg'), filename: 'german shocka 02.jpeg');
post31.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+shocka+03.jpeg'), filename: 'german shocka 03.jpeg');

post32.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+bear+01.jpeg'), filename: 'german bear 01.jpeg');
post32.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+bear+02.jpeg'), filename: 'german bear 02.jpeg');

post33.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/german+cowboy+01.jpeg'), filename: 'german cowboy 01.jpeg');

post34.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+nik+01.jpeg'), filename: 'americanshorthair nik 01.jpeg');

post35.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+pumpkin+01.jpeg'), filename: 'americanshorthair pumpkin 01.jpeg');
post35.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+pumpkin+02.jpeg'), filename: 'americanshorthair pumpkin 02.jpeg');
post35.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+pumpkin+03.jpeg'), filename: 'americanshorthair pumpkin 03.jpeg');

post36.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+belka+01.jpeg'), filename: 'americanshorthair belka 01.jpeg');
post36.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+belka+02.jpeg'), filename: 'americanshorthair belka 02.jpeg');
post36.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+belka+03.jpeg'), filename: 'americanshorthair belka 03.jpeg');

post37.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+james+01.jpeg'), filename: 'americanshorthair james 01.jpeg');
post37.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+james+02.jpeg'), filename: 'americanshorthair james 02.jpeg');
post37.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+james+03.jpeg'), filename: 'americanshorthair james 03.jpeg');
post37.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+james+04.jpeg'), filename: 'americanshorthair james 04.jpeg');
post37.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+james+05.jpeg'), filename: 'americanshorthair james 05.jpeg');

post38.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+ninja+01.jpeg'), filename: 'americanshorthair ninja 01.jpeg');
post38.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+ninja+02.jpeg'), filename: 'americanshorthair ninja 02.jpeg');

post39.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+spencer+01.jpeg'), filename: 'americanshorthair spencer 01.jpeg');
post39.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+spencer+02.jpeg'), filename: 'americanshorthair spencer 02.jpeg');
post39.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+spencer+03.jpeg'), filename: 'americanshorthair spencer 03.jpeg');
post39.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+spencer+04.jpeg'), filename: 'americanshorthair spencer 04.jpeg');

post40.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+earnest+01.jpeg'), filename: 'americanshorthair earnest 01.jpeg');
post40.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+earnest+02.jpeg'), filename: 'americanshorthair earnest 02.jpeg');
post40.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+earnest+03.jpeg'), filename: 'americanshorthair earnest 03.jpeg');
post40.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+earnest+04.jpeg'), filename: 'americanshorthair earnest 04.jpeg');
post40.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+earnest+05.jpeg'), filename: 'americanshorthair earnest 05.jpeg');

post41.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+refrigerator+01.jpeg'), filename: 'americanshorthair refrigerator 01.jpeg');
post41.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+refrigerator+02.jpeg'), filename: 'americanshorthair refrigerator 02.jpeg');
post41.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/americanshorthair+refrigerator+03.jpeg'), filename: 'americanshorthair refrigerator 03.jpeg');

post42.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+peach+01.jpeg'), filename: 'abyssinian peach 01.jpeg');

post43.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+bindi+01.jpeg'), filename: 'abyssinian bindi 01.jpeg');
post43.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+bindi+02.jpeg'), filename: 'abyssinian bindi 02.jpeg');

post44.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+clover+01.jpeg'), filename: 'abyssinian clover 01.jpeg');
post44.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+clover+02.jpeg'), filename: 'abyssinian clover 02.jpeg');
post44.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+clover+03.jpeg'), filename: 'abyssinian clover 03.jpeg');

post45.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+mark+01.jpeg'), filename: 'abyssinian mark 01.jpeg');
post45.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+mark+02.jpeg'), filename: 'abyssinian mark 02.jpeg');
post45.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+mark+03.jpeg'), filename: 'abyssinian mark 03.jpeg');

post46.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+kid+01.jpeg'), filename: 'abyssinian kid 01.jpeg');
post46.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+kid+02.jpeg'), filename: 'abyssinian kid 02.jpeg');
post46.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/abyssinian+kid+03.jpeg'), filename: 'abyssinian kid 03.jpeg');

post47.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+iris+01.jpeg'), filename: 'britishshorthair iris 01.jpeg');
post47.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+iris+02.jpeg'), filename: 'britishshorthair iris 02.jpeg');
post47.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+iris+03.jpeg'), filename: 'britishshorthair iris 03.jpeg');
post47.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+iris+04.jpeg'), filename: 'britishshorthair iris 04.jpeg');
post47.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+iris+05.jpeg'), filename: 'britishshorthair iris 05.jpeg');

post48.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+remy+01.jpeg'), filename: 'britishshorthair remy 01.jpeg');
post48.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+remy+02.jpeg'), filename: 'britishshorthair remy 02.jpeg');
post48.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+remy+03.jpeg'), filename: 'britishshorthair remy 03.jpeg');

post49.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+cabbage+01.jpeg'), filename: 'britishshorthair cabbage 01.jpeg');
post49.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+cabbage+02.jpeg'), filename: 'britishshorthair cabbage 02.jpeg');
post49.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+cabbage+03.jpeg'), filename: 'britishshorthair cabbage 03.jpeg');

post50.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+lily+01.jpeg'), filename: 'britishshorthair lily 01.jpeg');

post51.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+tigger+01.jpeg'), filename: 'britishshorthair tigger 01.jpeg');

post52.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+geralt+01.jpeg'), filename: 'britishshorthair geralt 01.jpeg');

post53.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+dante+01.jpeg'), filename: 'britishshorthair dante 01.jpeg');
post53.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+dante+02.jpeg'), filename: 'britishshorthair dante 02.jpeg');
post53.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+dante+03.jpeg'), filename: 'britishshorthair dante 03.jpeg');

post54.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+griffin+01.jpeg'), filename: 'britishshorthair griffin 01.jpeg');

post55.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+june+01.jpeg'), filename: 'britishshorthair june 01.jpeg');

post56.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+hunter+01.jpeg'), filename: 'britishshorthair hunter 01.jpeg');
post56.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+hunter+02.jpeg'), filename: 'britishshorthair hunter 02.jpeg');
post56.photos.attach(io: File.open('https://petrehome-seeds.s3.us-east-1.amazonaws.com/britishshorthair+hunter+03.jpeg'), filename: 'britishshorthair hunter 03.jpeg');
