from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/slide')
def slide():
    return render_template('slide.html')

@app.route('/summary')
def summary():
    return render_template('summary.html')

@app.route('/meowmatch')
def get_cats():
    cats = []
    for i in range(10):
        # just use direct image URL with random query to avoid caching
        cats.append(f"https://cataas.com/cat?width=300&height=400&random={i}")
    return jsonify(cats)

if __name__ == '__main__':
    app.run(debug=True)
