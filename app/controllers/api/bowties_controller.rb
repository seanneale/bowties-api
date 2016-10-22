module API
	class BowtiesController < ApplicationController
		skip_before_action 	:verify_authenticity_token
		before_action 		:set_bowtie, only: [ :update, :destroy]

		def index
			render json: Bowtie.all
		end

		def show
			render json: Bowtie.find_by(id: params[:id])
		end
		
		def update
			# puts bowtie_params
			@bowtie.assign_attributes(material: params[:material], pattern: params[:pattern], style: params[:style], image_url: params[:image_url], wholesale_price: params[:wholesale_price], retail_price: params[:retail_price])
			puts @bowtie.id
			if @bowtie.save
				puts 'Saved!'
			else
				flash[:bowtie] = @bowtie
				flash[:errors] = @bowtie.errors.messages
			end
		end

	protected
		def set_bowtie
			@bowtie = Bowtie.find_by(id: params[:id])
			@message = "Cannot find Bowtie with ID #{params[:id]}"
		end

	private
	# not used caused an error, ask denis about it, i guess theres a typo or input type I'm getting wrong
	# ActionController::ParameterMissing (param is missing or the value is empty: bowtie)
	# solution was just to pass the params directly
		def bowtie_params
			params.require(:bowtie).permit(:material)
			# params.require(:bowtie).permit(:material, :pattern, :style, :image_url, :wholesale_price, :retail_price)
		end

	end
end