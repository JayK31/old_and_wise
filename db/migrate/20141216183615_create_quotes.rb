class CreateQuotes< ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.text :text
      t.references :author, :index => true
      
      t.timestamps
    end
  end
end
