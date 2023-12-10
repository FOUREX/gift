from os import listdir
from json import load
from flask import Flask, render_template

app = Flask(__name__)


def load_images():
    return listdir("static/images")


def load_descriptions():
    descriptions = open("static/descriptions.json", "r", encoding="utf-8")
    return load(descriptions)


@app.route('/')
def root():
    return render_template("notIndex.html", images=load_images(), descriptions=load_descriptions())


if __name__ == '__main__':
    app.run()
