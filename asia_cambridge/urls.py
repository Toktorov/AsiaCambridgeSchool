"""asia_cambridge URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from django.views.generic import TemplateView

schema_view = get_schema_view(
    openapi.Info(
        title="Blog API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="nursultandev@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', TemplateView.as_view(template_name = 'index.html'), name = "index"),
    path('about/', TemplateView.as_view(template_name = 'index.html'), name = "about"),
    path('teachers/', TemplateView.as_view(template_name = 'index.html'), name = "teachers"),
    path('gallery/', TemplateView.as_view(template_name = 'index.html'), name = "gallery"),
    path('contact/', TemplateView.as_view(template_name = 'index.html'), name = "contact"),
    path('accreditation/', TemplateView.as_view(template_name = 'index.html'), name = "accreditation"),
    path('admin/', admin.site.urls),
    path('api/settings/', include('apps.settings.urls')),
    path('api/', include('apps.teachers.urls')),
    path('api/gallery/', include('apps.gallery.urls')),
    #docs
    path('api/swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)