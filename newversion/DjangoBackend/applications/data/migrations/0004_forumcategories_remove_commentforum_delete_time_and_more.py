# Generated by Django 4.1.5 on 2023-01-26 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0003_postforum_name_post'),
    ]

    operations = [
        migrations.CreateModel(
            name='ForumCategories',
            fields=[
                ('id_category', models.AutoField(primary_key=True, serialize=False)),
                ('name_category', models.CharField(max_length=255)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='commentforum',
            name='delete_time',
        ),
        migrations.RemoveField(
            model_name='postforum',
            name='delete_time',
        ),
    ]
