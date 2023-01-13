from django.urls import path 
from apps.gallery.views import GalleryAPIView

urlpatterns = [
    path('', GalleryAPIView.as_view(), name = "api_gallery")
]