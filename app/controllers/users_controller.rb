class UsersController < ApplicationController
	before_action :set_user, only: [:show, :edit, :update, :destroy]

	respond_to :html

	def index
		@users = User.all
		respond_with(@users)
	end

	def show
		respond_with(@user)
	end

	def new
		@user = User.new
		respond_with(@user)
	end

	def edit
	end

	def create
		@user = User.new(user_params)
		@user.password = params[:password]
		if @user.save!
			session[:id] = @user.id
			redirect_to users_show_path
		else
			render :new
		end
	end

	def update
		@user.update(user_params)
		respond_with(@user)
	end

	def destroy
		@user.destroy
		respond_with(@user)
	end

	def login
		@user = User.find_by_email(params[:email])
		if @user.password == params[:password]
			session[:id] = @user.id
			# give_token
		else
			redirect_to home_url
		end
	end

	def logout
		session[:id] = nil
		redirect_to '/'
	end

	private
	def set_user
		@user = User.find(params[:id])
	end

	def user_params
		params.require(:user).permit(:first_name, :last_name, :address, :phone, :email, :password_hash)
	end
end
