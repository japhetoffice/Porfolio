from flask import Flask, jsonify, render_template
import mysql.connector

app = Flask(__name__)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",            # Default MySQL user
        password="your_password", 
        database="portfolio_db"
    )

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/projects')
def get_projects():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM projects")
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)

@app.route('/api/certifications')
def get_certs():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    # Make sure you create a 'certifications' table in SQL too!
    cursor.execute("SELECT * FROM certifications")
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)