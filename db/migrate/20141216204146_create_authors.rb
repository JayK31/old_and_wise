class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
      t.text :wiki_desc
      t.string :wiki_url
      
      t.timestamps
    end
  end
end
