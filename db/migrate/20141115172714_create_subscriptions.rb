class CreateSubscriptions < ActiveRecord::Migration
	def change
		create_table :subscriptions do |t|
			t.string :name
			t.integer :price
			t.date :exp_date
			t.date :pay_date
			t.boolean :monthly
			t.string :tag
			t.string :url
			t.belongs_to :user

			t.timestamps
		end
	end
end
