json.array!(@subscriptions) do |subscription|
  json.extract! subscription, :id, :sub_name, :sub_price, :exp_date, :pay_date
  json.url subscription_url(subscription, format: :json)
end
