# Generated by Django 4.0.3 on 2022-05-02 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='applicationstack',
            name='resources',
        ),
        migrations.RemoveField(
            model_name='applicationstack',
            name='stack',
        ),
        migrations.RemoveField(
            model_name='stack',
            name='link',
        ),
        migrations.AddField(
            model_name='stack',
            name='resources',
            field=models.FileField(blank=True, max_length=200, upload_to=''),
        ),
    ]
