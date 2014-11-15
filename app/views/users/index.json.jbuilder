json.array!(@users) do |user|
  json.extract! user, :id, :first_name, :last_name, :address, :phone, :email, :password_hash
  json.url user_url(user, format: :json)
end
