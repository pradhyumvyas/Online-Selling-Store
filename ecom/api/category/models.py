from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True) #Time will be created when field were invoked
    updated_at = models.DateTimeField(auto_now=True) #It will update time

    def __str__(self):
        return self.name
    