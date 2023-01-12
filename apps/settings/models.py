from django.db import models

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