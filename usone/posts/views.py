from django.db.models import Q
from rest_framework import status, pagination
from rest_framework.decorators import (
    authentication_classes, permission_classes
)
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Post, Image
from . import serializers

#test
class BasicSizePagination(pagination.PageNumberPagination):
    page_size = 50


@authentication_classes([])
@permission_classes([])
class ListAllImages(ListAPIView):
    queryset = Image.objects.all()
    serializer_class = serializers.ImageSerializer


@authentication_classes([])
@permission_classes([])
class PostByFilters(ListAPIView):
    serializer_class = serializers.PostSerializer
    pagination_class = BasicSizePagination

    def get_queryset(self):
        queryset = Post.objects.all()
        reg = self.request.query_params.get('reg', None)
        cat = self.request.query_params.get('cat', None)
        limit = self.request.query_params.get('limit', None)
        order_by = self.request.query_params.get('order', None)
        inDescOrder = self.request.query_params.get('in-desc-order', None)

        # By region
        if reg:
            queryset = queryset.filter(region__iexact=reg)

        # By category
        if cat:
            queryset = queryset.filter(category__iexact=cat)

        # Order based on created date
        if (inDescOrder.lower() == 'desc'.lower() or
                inDescOrder.lower() == 'true'.lower()):
            queryset = queryset.order_by('-{0}'.format(order_by))
        else:
            queryset = queryset.order_by(order_by)

        # Limit the number of tuples
        if limit:
            queryset = queryset[:int(limit)]

        return queryset
