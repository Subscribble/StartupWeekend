class SubscriptionsController < ApplicationController
  before_action :set_subscription, only: [:show, :edit, :update, :destroy]
  # GET /subscriptions
  # GET /subscriptions.json
  def index
    # @user = User.find(session[:id])
    @subscriptions = Subscription.all
    @money = [0,0]
    @subscriptions.each do |s|
      @money[0] += s.price
    end
    @money[1] = (@money[0] - 79)*12 
  end

  # GET /subscriptions/1
  # GET /subscriptions/1.json
  def show
    # format.json { render :json => @subscription }
    # respond_to :json
  end

  # GET /subscriptions/new
  def new
    @subscription = Subscription.new
    @year_from_today = Date.today + 1.year
  end

  # GET /subscriptions/1/edit
  def edit
  end

  # POST /subscriptions
  # POST /subscriptions.json
  def create
    @subscription = Subscription.new(subscription_params)

    respond_to do |format|
      if @subscription.save
        format.html { redirect_to subscriptions_path, notice: 'Subscription was successfully created.' }
        format.json { render :show, status: :created, location: @subscription }
      else
        format.html { render :new }
        format.json { render json: @subscription.errors, status: :unprocessable_entity }
      end
    end
  end

  def batch_create

    array = params["ajax"].values
    puts "-============================"
    puts array
    array.each do |subscription_data|
      puts subscription_data
      Subscription.create!(subscription_data)
    end
    redirect_to "/subscriptions"
  end

  # PATCH/PUT /subscriptions/1
  # PATCH/PUT /subscriptions/1.json
  def update
    respond_to do |format|
      if @subscription.update(subscription_params)
        format.html { redirect_to @subscription, notice: 'Subscription was successfully updated.' }
        format.json { render :show, status: :ok, location: @subscription }
      else
        format.html { render :edit }
        format.json { render json: @subscription.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /subscriptions/1
  # DELETE /subscriptions/1.json
  def destroy
    @subscription.destroy
    respond_to do |format|
      format.html { redirect_to subscriptions_url, notice: 'Subscription was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_subscription
    @subscription = Subscription.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def subscription_params
    params.require(:subscription).permit(:name, :price, :exp_date, :pay_date, :tag)
  end

end
