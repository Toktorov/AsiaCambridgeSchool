from django.contrib import admin
from apps.teachers.models import Teacher, Cook, Parent

# Register your models here.
admin.site.register(Teacher)
admin.site.register(Cook)
admin.site.register(Parent)