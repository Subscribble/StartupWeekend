class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.text :address
      t.integer :phone
      t.string :email
      t.string :password_hash

      t.timestamps
    end
  end
end
