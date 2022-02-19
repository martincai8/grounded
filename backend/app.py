from flask import *
import os

app = Flask(__name__, template_folder="../templates")

@app.route("/")
def index():
    return render_template("start.html")



if __name__ == "__main__":
    app.run(debug = True)
