from bson import ObjectId

class Student:
    def __init__(self, id, fname, lname, dob, email, contact, pwd, chosencourse, depato):
        self.id = id
        self.fname = fname
        self.lname = lname
        self.dob = dob
        self.email = email
        self.contact = contact
        self.pwd = pwd
        self.chosencourse = chosencourse
        self.depato = depato
