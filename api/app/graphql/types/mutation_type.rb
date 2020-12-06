module Types
  class MutationType < Types::BaseObject
    field :create_build, mutation: Mutations::CreateBuild
    field :sign_up, mutation: Mutations::SignUp
  end
end
