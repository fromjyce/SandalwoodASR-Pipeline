from django.urls import path
from .views import submit_text

urlpatterns = [
    path('submit_text/', submit_text, name='submit_text'),
]
