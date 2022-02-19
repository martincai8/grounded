from flask import *
import os

app = Flask(__name__, template_folder="../templates", static_folder="../static")

@app.route("/")
def index():
    return render_template("start.html")

@app.route("/breathe")
def breathe():
    return render_template("breathing.html")

@app.route("/resources")
def resources():
    return render_template("resources.html")

@app.route("/senses/<int:page>", methods = ["GET"])
def senses(page):
    return render_template("senses/senses{}.html".format(page))

if __name__ == "__main__":
    app.run(debug = True)
