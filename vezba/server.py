from flask import Flask,render_template

app = Flask(__name__)
names = ["ajsa","saki","kaki"]

@app.route("/")
def home():
    return render_template("index.html",names = names)

if __name__ == "__main__":
    app.run(debug=True)

# def func():
#     def nest():
#         return 'cao'
#     return nest
# nasa = func()
# print(nasa())

# def sabira(x,y):
#     return x+y

# def kalkulise(func,x,y):
#     return func(x,y)

# nasa = kalkulise(sabira,2,3)
# print(nasa)

# def decorator(func):
#     def inner():
#         res = func() + "ajsa"
#         return res
#     return inner

# @decorator
# def hello():
#     return 'cao'

# print(hello())

