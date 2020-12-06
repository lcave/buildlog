module Types
  class QueryType < Types::BaseObject
    # TODO: remove me
    field :test_field, String, null: false, description: "An example field added by the generator"

    field :users, [Types::UserType], null: false, description: "Get all users"

    def test_field
      "Hello World!"
    end

    def users
      return User.all
    end
  end
end
