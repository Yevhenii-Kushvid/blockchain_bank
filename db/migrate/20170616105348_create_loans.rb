class CreateLoans < ActiveRecord::Migration[5.1]
  def change
    create_table :loans do |t|
      t.string :address

      t.integer :from
      t.integer :to
      t.string :amount
      t.string :status

      t.timestamps
    end
  end
end
