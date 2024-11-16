from django.urls import path
from .views import submit_text, submit_query

urlpatterns = [
    path('submit_text/', submit_text, name='submit_text'),
    path('submit_query/', submit_query, name='submit_query'),
]
