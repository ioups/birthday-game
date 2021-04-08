class CreateBdays < ActiveRecord::Migration[6.1]
  def change
    create_table :bdays do |t|
      t.string :name
      t.date :birth_date

      t.timestamps
    end
  end
end
