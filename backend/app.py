from flask import Flask
from flask_marshmallow import Marshmallow
from config import Config
from db import mongo
from routes.student_routes import student_routes

app = Flask(__name__)
app.config.from_object(Config)

mongo.init_app(app)
m = Marshmallow(app)

app.register_blueprint(student_routes, url_prefix='/students')

if __name__ == '__main__':
    app.run(debug=True)
