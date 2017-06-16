class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :address
      t.string :name
      t.string :ballance
      
      t.timestamps
    end
  end
end
