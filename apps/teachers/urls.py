from django.urls import path
from apps.teachers.views import TeachersAPIView, CookAPIView


urlpatterns = [
    path('teachers/', TeachersAPIView.as_view(), name = "api_teachers"),
    path('cooks/', CookAPIView.as_view(), name = "api_cooks")
]