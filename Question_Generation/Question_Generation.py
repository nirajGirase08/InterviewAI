from transformers import AutoTokenizer, AutoModelForSeq2SeqLM,PegasusTokenizer
model = AutoModelForSeq2SeqLM.from_pretrained("AlekseyKulnevich/Pegasus-QuestionGeneration")
tokenizer = PegasusTokenizer.from_pretrained('google/pegasus-large')
input_text = """
Python is a popular programming language known for its readability and simplicity. 
It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. 
Python is widely used for web development, data analysis, artificial intelligence, and scientific computing.
"""



input_ = tokenizer.batch_encode_plus([input_text], max_length=1024, pad_to_max_length=True, 
                truncation=True, padding='longest', return_tensors='pt')
input_ids = input_['input_ids'] 
input_mask = input_['attention_mask']
questions = model.generate(input_ids=input_ids, 
                         attention_mask=input_mask, 
                         num_beams=32, 
                         no_repeat_ngram_size=2, 
                         early_stopping=True, 
                         num_return_sequences=10)

questions = tokenizer.batch_decode(questions, skip_special_tokens=True)
for i in questions:
    print(i)
# print(questions)