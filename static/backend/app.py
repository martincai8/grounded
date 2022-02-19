from pickle import TRUE
from flask import *

app = Flask(__name__, template_folder="frontend/html files")

@app.route("/")
def index():
    return render_template("frontend/html files/start.html")



if __name__ == "__main__":
    app.run(debug=True)
