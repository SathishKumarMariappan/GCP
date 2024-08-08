from flask import Flask
from google.cloud import datastore

app = Flask(__name__)
data = datastore.Client()

@app.route('/')
def hello():
    request = data.query(kind='demo')
    return list(request.fetch())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
