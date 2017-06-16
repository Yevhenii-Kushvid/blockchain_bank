class CreateLoans < ActiveRecord::Migration[5.1]
  def change
    create_table :loans do |t|
      t.integer :loaner
      t.integer :loanee
      t.float   :amount
      t.integer :status

      t.timestamps
    end
  end
end
