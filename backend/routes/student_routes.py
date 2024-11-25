from flask import Blueprint, request, jsonify
from services.studentregister import reg_student
from db import mongo

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
