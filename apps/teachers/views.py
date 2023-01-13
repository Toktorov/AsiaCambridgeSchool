from django.shortcuts import render
from rest_framework.generics import ListAPIView
from apps.teachers.models import Teacher, Cook
from apps.teachers.serializers import TeacherSerializer, CookSerializer

# Create your views here.
class TeachersAPIView(ListAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class CookAPIView(ListAPIView):
    queryset = Cook.objects.all()
    serializer_class = CookSerializer