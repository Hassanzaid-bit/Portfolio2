from django.contrib import admin
from .models import Article

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'uploaded', 'updated')

admin.site.register(Article, ArticleAdmin)