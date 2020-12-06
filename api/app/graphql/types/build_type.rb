module Types
  class BuildType < Types::BaseObject
    field :id, ID, null: false, description: "Build thread's ID"
    field :title, String, null: true, description: "Build thread's title"
    field :user_id, Integer, null: true, description: "ID of build thread's author"
    field :user, UserType, null: true, description: "Author of build thread as user object" 
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
