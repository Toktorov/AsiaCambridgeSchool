from rest_framework import serializers
from apps.teachers.models import Teacher, Cook, Parent


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"

class CookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cook
        fields = "__all__"

class ParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parent
        fields = "__all__"