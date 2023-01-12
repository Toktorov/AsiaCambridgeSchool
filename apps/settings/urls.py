from django.urls import path
from apps.settings.views import SettingAPIView


urlpatterns = [
    path('', SettingAPIView.as_view(), name = 'api_setting'),
]