from rest_framework import serializers
from apps.settings.models import Setting, Progress, AboutSchool, SchoolHistory, News, Class, Accreditation


class SettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Setting
        fields = "__all__"

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Progress
        fields = "__all__"

class AboutSchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSchool
        fields = "__all__"

class SchoolHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolHistory
        fields = "__all__"

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News 
        fields = "__all__"

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = "__all__"

class AccreditationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accreditation
        fields = "__all__"