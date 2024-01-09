from os import listdir
from json import load
from flask import Flask, render_template


app = Flask(__name__)


def load_images():
    return listdir("static/images/webp")


def load_descriptions():
    descriptions = open("static/descriptions.json", "r", encoding="utf-8")
    return load(descriptions)


@app.route("/")
def root():
    return render_template("start.html")


@app.route("/main/width=<int:width>/height=<int:height>")
def main(width: int, height: int):
    return render_template("index.html", mainWidth=width, mainHeight=height,
                           images=load_images(), descriptions=load_descriptions())


if __name__ == '__main__':
    app.run()
