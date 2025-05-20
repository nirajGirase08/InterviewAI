import whisper

model = whisper.load_model("turbo")
result = model.transcribe("/Users/neel/Documents/Projects/InterviewAI/download.mp3")
print(result["text"])
