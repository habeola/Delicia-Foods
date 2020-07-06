from django.db import models



class Food(models.Model):
    title = models.CharField(max_length=100, blank=True)
    pics = models.ImageField()
    price = models.FloatField()
    description = models.TextField()
    delivery_fee = models.FloatField()
    top_rated = models.BooleanField()
    # add rating and trending later

    def __str__(self):

        return self.title

    
