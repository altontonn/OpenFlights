class Airline < ApplicationRecord
  has_many :reviews

  before_create :slugify
  def slugify
    self.slug = name.parametize
  end
end
