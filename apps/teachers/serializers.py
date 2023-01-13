from rest_framework import serializers
from apps.teachers.models import Teacher, Cook


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"

class CookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cook
        fields = "__all__"