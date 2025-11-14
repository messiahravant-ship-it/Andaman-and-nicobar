from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        expression = request.json.get('expression', '')
        result = str(eval(expression))  # for demo use only
        return jsonify({'result': result})
    except Exception:
        return jsonify({'result': 'Error'})

if __name__ == '__main__':
    app.run(debug=True)
