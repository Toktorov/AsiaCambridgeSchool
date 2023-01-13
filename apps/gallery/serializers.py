from rest_framework import serializers
from apps.gallery.models import Gallery


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = "__all__"