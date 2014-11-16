class Subscription < ActiveRecord::Base
	belongs_to :user

	composed_of :sub_price,
              :class_name => 'Money',
              :mapping => %w(price cents),
              :converter => Proc.new { |value| value.respond_to?(:to_money) ? value.to_money : Money.empty }
     
end
