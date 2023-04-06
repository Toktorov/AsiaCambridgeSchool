from django.db import models
from django_resized.forms import ResizedImageField

# Create your models here.
class Setting(models.Model):
    title = models.CharField(
        max_length=255,
        verbose_name="Название"
    )
    description = models.TextField(
        verbose_name="Описание"
    )
    logo = models.ImageField(
        upload_to='logo/',
        blank=True, null = True
    )
    phone = models.CharField(
        max_length=100,
        verbose_name="Телефонный номер",
        blank = True, null = True
    )
    instagram = models.URLField(
        verbose_name="Ссылка на Instagram",
        blank = True, null = True
    )
    facebook = models.URLField(
        verbose_name="Ссылка на Facebook",
        blank = True, null = True
    )
    whatsapp = models.URLField(
        verbose_name="Ссылка на Whats App",
        blank = True, null = True
    )
    email = models.EmailField(
        verbose_name="Почта",
        blank = True, null = True
    )
    address = models.CharField(
        max_length=255,
        verbose_name="Адрес школы"
    )
    address_url = models.URLField(
        verbose_name="Ссылка на школу google maps"
    )

    def __str__(self):
        return self.title 

    class Meta:
        verbose_name = "Настройка"
        verbose_name_plural = "Настройки"

class Progress(models.Model):
    subject = models.CharField(
        max_length=255,
        verbose_name="Достижение"
    )
    image = ResizedImageField(
        force_format="WEBP", 
        quality=100, 
        upload_to='gallery_images/',
        verbose_name="Фотография",
        blank = True, null = True
    )

    def __str__(self):
        return self.subject
    
    class Meta:
        verbose_name = "Достижение"
        verbose_name_plural = "Достижения"

class SchoolHistory(models.Model):
    subject = models.TextField(
        verbose_name="История школы"
    )
    image = ResizedImageField(
        force_format="WEBP", 
        quality=100, 
        upload_to='gallery_images/',
        verbose_name="Фотография",
        blank = True, null = True
    )

    def __str__(self):
        return self.subject
    
    class Meta:
        verbose_name = "История школы"
        verbose_name_plural = "История школы"

class AboutSchool(models.Model):
    subject = models.CharField(
        max_length=255,
        verbose_name="О школе"
    )
    image = ResizedImageField(
        force_format="WEBP", 
        quality=100, 
        upload_to='gallery_images/',
        verbose_name="Фотография",
        blank = True, null = True
    )

    def __str__(self):
        return self.subject

    class Meta:
        verbose_name = "О нашей школе"
        verbose_name_plural = "О нашей школе"

class News(models.Model):
    title = models.CharField(
        max_length=255,
        verbose_name="Заголовок"
    )
    description = models.TextField(
        verbose_name="Описание",
        blank = True, null = True
    )
    image = models.ImageField(
        upload_to="news_images/",
        verbose_name="Фотография",
        blank=True, null=True
    )
    created = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title 

    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"

class Class(models.Model):
    name = models.CharField(
        max_length=100,
        verbose_name="Название класса"
    )
    image = ResizedImageField(
        force_format="WEBP", 
        quality=100, 
        upload_to='gallery_images/',
        verbose_name="Фотография",
        blank = True, null = True
    )

    def __str__(self):
        return self.name 

    class Meta:
        verbose_name = "Класс"
        verbose_name_plural = "Классы"

class Accreditation(models.Model):
    title = models.TextField(
        verbose_name="Название",
        blank=True, null=True
    )
    pdf_file = models.FileField(
        upload_to="pdf_files",
        verbose_name="PDF",
        blank=True, null=True
    )

    def __str__(self):
        return f"{self.title} {self.pdf_file}"
    
    class Meta:
        verbose_name = "Аккредитация"
        verbose_name_plural = "Аккредитации"