module UsersHelper
	def current_user
		@current_user ||= User.find(id: session[:id])
	end
end
