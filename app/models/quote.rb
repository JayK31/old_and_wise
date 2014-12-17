class Quote < ActiveRecord::Base
  belongs_to :author
  validates :text, presence: true
end