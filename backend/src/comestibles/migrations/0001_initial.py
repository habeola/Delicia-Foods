# Generated by Django 3.0.8 on 2020-07-06 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pics', models.ImageField(upload_to='')),
                ('price', models.FloatField()),
                ('description', models.TextField()),
                ('delivery_fee', models.FloatField()),
                ('top_rated', models.BooleanField()),
            ],
        ),
    ]
