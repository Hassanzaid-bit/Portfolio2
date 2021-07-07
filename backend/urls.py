from django.contrib import admin
from django.urls import path, include
from portfolio import views
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
    path('', TemplateView.as_view(template_name = 'index.html'))
]
