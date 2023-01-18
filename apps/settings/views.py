from apps.settings.models import Setting, Progress, AboutSchool, SchoolHistory
from apps.settings.serializers import SettingSerializer, ProgressSerializer, AboutSchoolSerializer, SchoolHistorySerializer
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class SettingAPIView(APIView):
    def get(self, request):
        setting = Setting.objects.latest('id')
        serializer = SettingSerializer(setting)
        return Response({"settings": serializer.data})

class ProgressAPIView(ListAPIView):
    queryset = Progress.objects.all()
    serializer_class = ProgressSerializer

class AboutSchoolAPIView(ListAPIView):
    queryset = AboutSchool.objects.all()
    serializer_class = AboutSchoolSerializer

class SchoolHistoryAPIView(APIView):
    def get(self, request):
        setting = SchoolHistory.objects.latest('id')
        serializer = SchoolHistorySerializer(setting)
        return Response({"history": serializer.data})
