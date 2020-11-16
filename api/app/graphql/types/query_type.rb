module Types
  class QueryType < Types::BaseObject
    field :users, [Types::UserType], null: false, description: "Returns a list of all users"
    field :build_threads, [Types::BuildThreadType], null: false, description: "Returns all build threads"

    def users
      User.all
    end

    def build_threads
      BuildThread.all
    end
  end
end
