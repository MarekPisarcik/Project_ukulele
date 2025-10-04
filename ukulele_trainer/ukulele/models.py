from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField("Napíš niečo o sebe", max_length=500, blank=True)

    typ_ukulele = models.CharField("Aký typ ukulele máš ?", max_length=50)
    ladenie = models.CharField("Aké ladenie najradšej používaš ?", max_length=50)
    znacka_strun = models.CharField("Akú značku strún používaš ?", max_length=50)
    dalsi_nastroj = models.CharField("Na aký ďalší hudobný nástroj sa učíš hrať ?", max_length=50, blank=True)

    def __str__(self):
        return f"{self.user.username}'s profile"
