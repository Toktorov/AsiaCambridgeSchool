from django.urls import path
from apps.settings.views import SettingAPIView, ProgressAPIView, AboutSchoolAPIView, SchoolHistoryAPIView, NewsAPIView, ClassAPIView


urlpatterns = [
    path('', SettingAPIView.as_view(), name = 'api_setting'),
    path('progress/', ProgressAPIView.as_view(), name = 'api_progress'),
    path('about/', AboutSchoolAPIView.as_view(), name = 'api_about'),
    path('history/', SchoolHistoryAPIView.as_view(), name = 'api_history'),
    path('news/', NewsAPIView.as_view(), name = 'api_news'),
    path('class/', ClassAPIView.as_view(), name = 'api_class'),
]