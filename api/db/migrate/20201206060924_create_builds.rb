class CreateBuilds < ActiveRecord::Migration[5.1]
  def change
    create_table :builds do |t|
      t.string :title
      t.integer :user_id

      t.timestamps
    end
  end
end
