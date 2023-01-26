from django.db import models

def resources_path(post,filename):
    return 'posts/{0}/{1}'.format(post.name_post,filename)

class PostForum(models.Model):
    id_post =  models.AutoField(primary_key=True)
    name_post = models.TextField(blank = False,  max_length=300)
    text_post = models.TextField(blank = True)
    id_category = models.ForeignKey('ForumCategories', models.DO_NOTHING, db_column='id_category')
    image_post = models.ImageField(upload_to=resources_path,blank=True,null=True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '"'+str(self.name_post)+'"'


class CommentForum(models.Model):
    id_comment = models.AutoField(primary_key=True)
    id_post = models.ForeignKey('PostForum', models.DO_NOTHING, db_column='id_post')
    text_comment = models.TextField(blank = True)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id_comment)+" - " + str(self.id_post)

class ForumCategories(models.Model):
    id_category = models.AutoField(primary_key=True)
    name_category = models.CharField(max_length=255,blank=False)
    create_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.name_category)
