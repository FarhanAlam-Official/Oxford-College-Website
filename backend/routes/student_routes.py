from flask import Blueprint, request, jsonify
from services.studentregister import reg_student
from db import mongo
from services.studentlogin import login_user

#creating BP
student_routes = Blueprint('student_routes', __name__)


#student route
@student_routes.route('/register', methods=['POST'])
def register():
    student_data = request.json
    response = reg_student(mongo, student_data)
    if response['success']:
        return jsonify({"message": "Student registered successfully", "id": response['id']}), 201
    return jsonify({"message": response['message']}), 400


# Login route
@student_routes.route('/login', methods=['POST'])
def login():
    login_data = request.json
    response = login_user(login_data)  

    if response['success']:
        return jsonify({
            "message": response['message'],
            "token": response['token']
        }), 200
    else:
        return jsonify({"message": response['message']}), 401