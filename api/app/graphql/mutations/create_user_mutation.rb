module Mutations
  class CreateUserMutation < BaseMutation
    field :user, Types::UserType, null: false

    argument :username, String, required: true, description: "String display name for user"
    argument :email, String, required: true, description: "String email for user, unique"
    argument :password, String, required: true, description: "String passord name for user"

    def resolve(username:, email:, password:)
      @user = User.new(username: username, email: email, password: password)
      if (@user.save)
        {
          user: @user,
          errors: [],
        }
      else
        {
          user: nil,
          errors: @post.errors.full_messages,
        }
      end
    end
  end
end
