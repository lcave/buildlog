# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: "test@test.com", password: "abc12345")

100.times do
  User.create!(email: Faker::Internet.unique.email,
               password: "abc12345")
end

User.all.each do |user|
  rand(5).times do
    BuildThread.create!(title: Faker::Book.unique.title, user_id: user.id)
  end
end
