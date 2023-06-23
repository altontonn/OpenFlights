class Api::V1::AirlinesController < ApplicationController
  def index
    airlines = Airline.all
    render json: AirlineSerializer.new(airlines).serialized_json
  end

  def show
    airline = Airline.find_by(slug: params[:slug])
    render json: AirlineSerializer.new(airline).serialized_json
  end

  def create

    private
    def airline_params
      params.require(:airline).permit(:name, :image_url)
    end
  end
end
