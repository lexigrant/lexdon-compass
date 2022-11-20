from django.shortcuts import render
from rest_framework import generics
from .serializers import CoreSerializer
from .models import Core
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.

class CoreList(generics.ListCreateAPIView):
    queryset = Core.objects.all().order_by('id')
    serializer_class = CoreSerializer
    parser_classes = (MultiPartParser, FormParser)
    # permission_classes = [
    #     permissions.IsAuthenticatedOrReadOnly
    # ]

    def perform_create(self, serializer):
        return super().perform_create(serializer)

class CoreDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Core.objects.all().order_by('id')
    serializer_class = CoreSerializer
    parser_classes = (MultiPartParser, FormParser)
    # permission_classes = [
    #     permissions.IsAuthenticatedOrReadOnly
    # ]

    def perform_create(self, serializer):
        return super().perform_create(serializer)