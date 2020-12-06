module Types
  class MutationType < Types::BaseObject
    field :create_build_mutation, mutation: Mutations::CreateBuildMutation
    field :create_user_mutation, mutation: Mutations::CreateUserMutation
    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World"
    end
  end
end
