class Api::V1::ReviewsController < ApplicationController
  private

  def review_params
    params.require(:review).permit(:title, :description, :score, :airline_id)
  end
end
