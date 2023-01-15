from django.db import models

class PostForum(models.Model):
    id_post =  models.AutoField(primary_key=True)
    text_post = models.TextField(blank = True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)
    delete_time = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return str(self.id_post)


class CommentForum(models.Model):
    id_comment = models.AutoField(primary_key=True)
    id_post = models.ForeignKey('PostForum', models.DO_NOTHING, db_column='id_post')
    text_comment = models.TextField(blank = True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)
    delete_time = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return str(self.id_comment)+" - " + str(self.id_post)