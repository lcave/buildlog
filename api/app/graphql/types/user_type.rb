module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false, description: "User's ID"
    field :username, String, null: true, description: "User's display name, non-unique"
    field :email, String, null: true, description: "User's email, unique"
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
