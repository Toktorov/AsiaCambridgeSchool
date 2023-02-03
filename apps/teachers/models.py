from django.db import models
from django_resized.forms import ResizedImageField

# Create your models here.
class Teacher(models.Model):
    full_name = models.CharField(
        max_length=255,
        verbose_name="Полное имя учителя"
    )
    subject = models.CharField(
        max_length=255,
        verbose_name="Должность"
    )
    image = ResizedImageField(
        force_format="WEBP", 
        quality=100, 
        upload_to='teacher_images/',
        verbose_name="Фотография профиля",
        blank = True, null = True
    )

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Учитель"
        verbose_name_plural = "Учителя"

class Cook(models.Model):
    full_name = models.CharField(
        max_length=255,
        verbose_name="Полное имя учителя"
    )
    subject = models.CharField(
        max_length=255,
        verbose_name="Должность"
    )
    image = ResizedImageField(
        force_format="WEBP", 
        quality=100, 
        upload_to='cooks_images/',
        verbose_name="Фотография профиля",
        blank = True, null = True
    )

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Повар"
        verbose_name_plural = "Повара"

class Parent(models.Model):
    full_name = models.CharField(
        max_length=255,
        verbose_name="Полное имя родителя"
    )
    subject = models.CharField(
        max_length=255,
        verbose_name="Должность"
    )
    image = ResizedImageField(
        force_format="WEBP", 
        quality=100, 
        upload_to='cooks_images/',
        verbose_name="Фотография",
        blank = True, null = True
    )

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Родитель"
        verbose_name_plural = "Родители"