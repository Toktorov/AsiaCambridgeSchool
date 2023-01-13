from django.db import models
from django_resized.forms import ResizedImageField

# Create your models here.
class Gallery(models.Model):
    image = ResizedImageField(
        force_format="WEBP", 
        quality=100, 
        upload_to='gallery_images/',
        verbose_name="Фотография",
        blank = True, null = True
    )

    def __str__(self):
        return str(self.id)

    class Meta:
        verbose_name = "Галерея"
        verbose_name_plural = "Галереи"