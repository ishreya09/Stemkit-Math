# using flask_restful
from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import modules.multinomial as m
import sympy
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
		a=m.stringToStrEquation(a)
		b=m.stringToStrEquation(b)
		p1= m.Multinomial(a.strip())
		p2= m.Multinomial(b.strip())
		ans="something went wrong"
		if (data['choice']==1):
			ans=(p1+p2)
		elif (data['choice']==2):
			ans=(p1-p2)
		elif (data['choice']==3):
			ans=(p1*p2)
		elif (data['choice']==4):
			ans=(p1/p2)
		elif (data['choice']==5):
			ans=p1**p2
		elif (data['choice']==7):
			ans=p1.getLCM(p2)
		elif (data['choice']==8):
			ans=p1.getGCD(p2)
		elif (data['choice']==13):
			ans=p1.drawPoly(p2)
		ans=sympy.simplify(ans)
		ans=m.equationToStr(ans)	
		if(ans==""):
			ans="0"
		print(a)
		print(b)
		print(ans)
		data['answer']=ans

		# return the sum of two numbers posted
		# in the request
		return jsonify(data)

api.add_resource(Polynomial, '/polynomial')


# driver function
if __name__ == '__main__':

	app.run(debug = True)