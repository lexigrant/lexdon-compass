from django.urls import path
from . import views

urlpatterns = [
    path('api/core', views.CoreList.as_view(), name='core_list'),
    path('api/core/<int:pk>', views.CoreDetail.as_view(), name='core_detail')
]