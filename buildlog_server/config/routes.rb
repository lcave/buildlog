Rails.application.routes.draw do
  resources :users
  post "/login", to: "users#login"
  get "/login", to: "users#auto_login"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
