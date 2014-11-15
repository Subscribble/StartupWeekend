class CreateSubscriptions < ActiveRecord::Migration
	def change
		create_table :subscriptions do |t|
			t.string :sub_name
			t.integer :sub_price
			t.date :exp_date
			t.date :pay_date
			t.belongs_to :user

			t.timestamps
		end
	end
end
