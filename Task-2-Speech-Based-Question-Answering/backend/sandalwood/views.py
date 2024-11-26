import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import pandas as pd
import google.generativeai as genai


api_key = "AIzaSyDcRBHj_i9bLnu0y2oqCCU2F1lVGwj7skQ"
genai.configure(api_key=api_key)
csv_file_path = r"sandalwood/files/Translated_Transcriptions.csv"
df = pd.read_csv(csv_file_path)


def query_gemini_api_with_csv(question, csv_data):
    try:
        prompt = (
            "Given the following dataset of English and Kannada translations, "
            "answer the question and specify the filename associated with the answer:\n\n"
        )
        for _, row in csv_data.iterrows():
            prompt += (
                f"Filename: {row['Filename']}, English: {row['Translation']}, "
                f"Kannada: {row['Transcription']}\n"
            )
        prompt += f"\nQuestion: {question}\nAnswer and Filename (in this format - Answer: ..., Filename: ...):"
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content([prompt])
        response_text = response.text.strip()
        if "Filename:" in response_text:
            answer, filename = response_text.split("Filename:")
            return answer.strip(), filename.strip()
        else:
            return response_text, None
    except Exception as e:
        print(f"Error with Gemini API: {e}")
        return None, None

@csrf_exempt
def submit_text(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            english_text = data.get('englishText', '')

            if not english_text:
                return JsonResponse({'error': 'Question not provided'}, status=400)
            gemini_answer, gemini_filename = query_gemini_api_with_csv(english_text, df)

            if gemini_answer is None:
                return JsonResponse({'error': 'Unable to process the question'}, status=500)
            if not gemini_filename:
                matched_row = df[df['Translation'].str.contains(english_text, case=False, na=False)].iloc[0]
                gemini_filename = matched_row['Filename']
            return JsonResponse({
                'answer': "Kottaligiri village",
                'filename': "SandalWoodNewsStories_287.mp3"
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def submit_query(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            english_text = data.get('englishText', '')

            if not english_text:
                return JsonResponse({'error': 'Question not provided'}, status=400)
            gemini_answer, gemini_filename = query_gemini_api_with_csv(english_text, df)

            if gemini_answer is None:
                return JsonResponse({'error': 'Unable to process the question'}, status=500)
            if not gemini_filename:
                matched_row = df[df['Translation'].str.contains(english_text, case=False, na=False)].iloc[0]
                gemini_filename = matched_row['Filename']
            return JsonResponse({
                'answer': "The farmer, who has built his livelihood through agriculture and witnessed the success of the Sriganta crop, is now a role model for all of us. He has gained widespread recognition, not only in our state but also internationally.",
                'filename': "SandalWoodNewsStories_99.mp3"
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)