module Mutations
  class CreateBuildMutation < BaseMutation
    field :build, Types::BuildType, null: false

    argument :title, String, required: true, description: "Build thread title, string"
    argument :user, Integer, required: true, description: "ID of build thread's author"

    def resolve(title:, user:)
      @build = Build.new(title: title, user: User.find(user))
      if (@build.save)
        {
          build: @build,
          errors: [],
        }
      else
        {
          build: nil,
          errors: @build.errors.full_messages,
        }
      end
    end
  end
end
