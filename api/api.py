# using flask_restful
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import modules.polynomial as p 
# creating the flask app
app = Flask(__name__)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
# cors = CORS(app, resources={r"/*": {"origins": "*"}})
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
# creating an API object
api = Api(app)

# making a class for a particular resource
# the get, post methods correspond to get and post requests
# they are automatically mapped by flask_restful.
# other methods include put, delete, etc.

class Polynomial(Resource):
	# Corresponds to POST request
	def post(self):
		# get the data posted as a request
		data = request.get_json()
		a=(data['poly1'])
		b=(data['poly2'])
		p1= p.Polynomial(a)
		p2= p.Polynomial(b)
		ans="something went wrong"
		if (data['choice']==1):
			ans=(p1+p2).poly
		
		elif (data['choice']==2):
			p2= -p2
			print(p1.polynomial)
			print(p2.polynomial)
			ans=(p1+p2).poly
		if(ans==""):
			ans="0"
		data['answer']=ans

		# return the sum of two numbers posted
		# in the request
		return jsonify(data)

api.add_resource(Polynomial, '/polynomial')


# driver function
if __name__ == '__main__':

	app.run(debug = True)