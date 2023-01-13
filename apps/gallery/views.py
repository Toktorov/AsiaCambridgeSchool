from rest_framework.generics import ListAPIView
from apps.gallery.models import Gallery
from apps.gallery.serializers import GallerySerializer

# Create your views here.
class GalleryAPIView(ListAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
