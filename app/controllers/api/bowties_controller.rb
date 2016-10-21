module API
	class BowtiesController < ApplicationController

		def index
			render json: Bowtie.all
		end

		def show
			render json: Bowtie.find_by(id: params[:id])
		end
		
	end
end