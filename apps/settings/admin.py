from django.contrib import admin
from apps.settings.models import Setting, Progress, AboutSchool, SchoolHistory, News, Class, Accreditation

# Register your models here.
admin.site.register(Setting)
admin.site.register(Progress)
admin.site.register(AboutSchool)
admin.site.register(SchoolHistory)
admin.site.register(News)
admin.site.register(Class)
admin.site.register(Accreditation)