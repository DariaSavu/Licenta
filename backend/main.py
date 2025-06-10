from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import BertForSequenceClassification, BertTokenizerFast

app = Flask(__name__)
CORS(app)

# Încarcă modelul tău
model_path = "ModelFinalSalvat"
model = BertForSequenceClassification.from_pretrained(model_path)
tokenizer = BertTokenizerFast.from_pretrained(model_path)
model = model.to("cpu")
def predict(text):

    inputs = tokenizer(text, padding=True, truncation=True, max_length=512, return_tensors="pt")
    outputs = model(**inputs)

    probs = outputs[0].softmax(1)
    pred_label_idx = probs.argmax()
    pred_label = model.config.id2label[pred_label_idx.item()]

    return pred_label

labels = ['offensive', 'none', 'sexism', 'body_shaming', 'homofobia', 'rasism', 'abilitism']

@app.route("/clasificare", methods=["POST"])
def clasificare():
    data = request.get_json()
    if "text" not in data:
        return jsonify({"error": "Lipsește câmpul 'text'"}), 400

    text = data["text"]
    label = predict(text)
    return jsonify({
        "text": text,
        "ans": "Acesta este un comentariu care se încadrează în clasa "+label,
    })


if __name__ == "__main__":
    app.run(debug=True)
