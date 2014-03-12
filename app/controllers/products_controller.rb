class ProductsController < ApplicationController
  respond_to :json, :html

  # GET /articles.json
  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def new
    @product = Product.new
  end

  def create
    new_product = Product.new
    new_product.name = params[:new_product][:name]
    new_product.description = params[:new_product][:description]
    new_product.price = params[:new_product][:price]

    new_product.save!

    respond_with(new_product) do |format|
      format.json { render :json => new_product.as_json }
    end

  end

  # private

  # def product_params
  #   params.require(:product).permit(:name, :price, :description)
  # end
end

