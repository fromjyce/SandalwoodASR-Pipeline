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
