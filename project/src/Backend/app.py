import os
import smtplib
from flask import Flask, request, jsonify
from flask_cors import CORS
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

EMAIL_USER = os.getenv('EMAIL_USER')
EMAIL_PASSWORD = os.getenv('EMAIL_PASS')

@app.route('/contact',methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')

    print(EMAIL_USER,",",EMAIL_PASSWORD)
    try:
        email_msg = EmailMessage()
        email_msg['Subject'] = subject
        email_msg['From'] = EMAIL_USER
        email_msg['To'] = EMAIL_USER
        email_msg.set_content(f"Name: {name}\nEmail: {email}\nMessage: {message}")

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_USER, EMAIL_PASSWORD)
            smtp.send_message(email_msg)
        
        return jsonify({'status': 'success'}), 200
    
    except Exception as e:
        print("Error:",e)
        return jsonify({'status': 'error', 'message': str(e)}), 500
if __name__ == '__main__':
    app.run(port=5000, debug=True)
        