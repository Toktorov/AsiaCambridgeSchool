from apps.settings.models import Setting, Progress, AboutSchool, SchoolHistory, News, Class, Accreditation
from apps.settings.serializers import (SettingSerializer, ProgressSerializer, AboutSchoolSerializer, 
SchoolHistorySerializer, NewsSerializer, ClassSerializer, AccreditationSerializer)
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

class NewsAPIView(ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class ClassAPIView(ListAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

class AccreditationAPIView(ListAPIView):
    queryset = Accreditation.objects.all()
    serializer_class = AccreditationSerializer

class SchoolHistoryAPIView(APIView):
    def get(self, request):
        setting = SchoolHistory.objects.latest('id')
        serializer = SchoolHistorySerializer(setting)
        return Response({"history": serializer.data})
