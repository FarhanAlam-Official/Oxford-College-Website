## Setting up:

1.**after pulling changes move to backend directory**

2. **Create Virtual Environment:**
   ```
   python -m venv venv
   ```

3. **Activate Virtual Environment:**
     ```
     venv\Scripts\activate
     ```
4. **Install Dependencies:**
   ```
   pip install -r requirements.txt
   ```

5. **Set MongoDB URI:**
   Create a `.env` file and add:
   ```
   MONGO_URI=mongodb://localhost:27017/OCEM
   ```

6. **Run the App:**
   ```
   python app.py
   ```

---

## API Usage (Postman/Curl):

- **URL**: `http://127.0.0.1:5000/students/register`
- **Method**: `POST`
- **Body** (JSON):
  ```json
  {
    "fname": "",
    "lname": "",
    "dob": "",
    "email": "",
    "contact": "",
    "pwd": "",
    "chosencourse": "",
    "depato": ""
  }
  ```


