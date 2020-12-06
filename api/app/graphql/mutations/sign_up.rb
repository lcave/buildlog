module Mutations
  class SignUp < BaseMutation
    require "json"
    field :user, Types::UserType, null: false

    argument :username, String, required: true, description: "String display name for user"
    argument :email, String, required: true, description: "String email for user, unique"
    argument :password, String, required: true, description: "String passord name for user"

    def resolve(username:, email:, password:)
      user = User.create(username: username, email: email, password: password)
      if user.save
        { user: user }
      else
        build_errors(user)
        return
      end
    end

    def build_errors(user)
      user.errors.map do |attr, message|
        message = user[attr] + " " + message
        context.add_error(GraphQL::ExecutionError.new(message, extensions: { attribute: attr }))
      end
    end
  end
end
