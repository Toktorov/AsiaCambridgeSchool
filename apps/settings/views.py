from apps.settings.models import Setting
from apps.settings.serializers import SettingSerializer
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class SettingAPIView(APIView):
    def get(self, request):
        setting = Setting.objects.latest('id')
        serializer = SettingSerializer(setting)
        return Response({"settings": serializer.data})