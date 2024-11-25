from flask_marshmallow import Marshmallow

m = Marshmallow()

class StudentSchema(m.Schema):
    class Meta:
        fields = ('id', 'fname', 'lname', 'dob', 'email', 'contact', 'pwd', 'chosencourse', 'depato')
