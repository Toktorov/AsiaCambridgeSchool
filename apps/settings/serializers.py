from rest_framework import serializers
from apps.settings.models import Setting, Progress, AboutSchool, SchoolHistory


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