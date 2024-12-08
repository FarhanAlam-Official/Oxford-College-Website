from werkzeug.security import check_password_hash
import jwt
import datetime
from db import mongo
from flask import jsonify, current_app
from dotenv import load_dotenv
import os

load_dotenv()

# JWT Token Creation
def create_token(user_id):
    expiration_time = datetime.datetime.utcnow() + datetime.timedelta(hours=24) 
    token = jwt.encode(
        {'user_id': str(user_id), 'exp': expiration_time},
        os.getenv('SECRET_KEY'),  
        algorithm='HS256'
    )
    return token

# Login functionality
def login_user(student_data):
    student = mongo.db.students.find_one({'email': student_data['email']})

    if not student:
        return {"success": False, "message": "Email not found"}
    
    if check_password_hash(student['pwd'], student_data['pwd']):
        token = create_token(student['_id']) 
        return {"success": True, "message": "Login successful", "token": token}
    
    return {"success": False, "message": "Invalid password"}
