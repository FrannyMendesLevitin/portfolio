class TumblrApiController < ApplicationController
	def api
		Tumblr.configure do |config|
 		 config.consumer_key = "AVA35F1XgrdYKtVjD6tlxVIdys8JVQlcWhnXjRPPygJA5mZ9z2"
 		 config.consumer_secret = "wuqmArmLDMNr4PnAPRfvVfJir4oOe5v1m2kbBBEKSDEpaq6gzz"
		end

		client = Tumblr::Client.new(:client => :httpclient)
		render json: client.posts("fmendesl.tumblr.com", :type => "photo", :limit => 10111111)
		require 'net/http'

		url = URI.parse('http://api.tumblr.com/v2/blog/fmendesl.tumblr.com/posts/photo?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4&tag=digital-cloth')
		req = Net::HTTP::Get.new(url.to_s)
		res = Net::HTTP.start(url.host, url.port) {|http|
		  http.request(req)
		}
		#render json: res.body
	
	end
end
