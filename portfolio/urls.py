from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.ArticleView, name = "article_list"),
    path('article/<str:pk>/', views.ArticleSingle, name = "article_single")
]