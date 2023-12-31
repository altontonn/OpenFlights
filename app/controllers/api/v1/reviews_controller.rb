class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery with: :null_session
  def create
    review = Review.new(review_params)
    if review.save
      render json: ReviewSerializer.new(review).serialized_json
    else
      render json: { errors: review.errors.messages }, status:
    end
  end

  def destroy
    review = Review.find(params[:id])
    if review.destroy
      head :no_content
    else
      render json: { errors: review.errors.messages }, status:
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :description, :score, :airline_id)
  end
end
