# frozen_string_literal: true

# Controller
class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.text :content

      t.timestamps
    end
  end
end
