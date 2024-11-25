from werkzeug.security import generate_password_hash


#registration fucntionilatiy
def reg_student(mongo, student_data):
    stu_col = mongo.db.students

    if stu_col.find_one({'email': student_data['email']}):
        return {"success": False, "message": "email already existed"}
    
    student_data['pwd'] = generate_password_hash(student_data['pwd'])    
    result = stu_col.insert_one(student_data)

    return {"success": True, "id": str(result.inserted_id)}
