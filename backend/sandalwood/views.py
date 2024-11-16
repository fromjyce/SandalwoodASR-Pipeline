import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def submit_text(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            english_text = data.get('english_text', '')
            kannada_text = data.get('kannada_text', '')

            return JsonResponse({
                'message': 'Text submitted successfully!',
                'data': {
                    'english_text': english_text,
                    'kannada_text': kannada_text
                }
            })

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)

    return JsonResponse({'error': 'Invalid request method.'}, status=400)

@csrf_exempt
def submit_query(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            kannada_text = data.get('kannadaText')
            english_text = data.get('englishText')
            answer = "Your processed answer here"
            audio_segment = "/path/to/generated/audio.wav"
            return JsonResponse({
                'answer': answer,
                'audioSegment': audio_segment
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
