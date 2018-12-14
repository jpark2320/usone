from django.db.models import Q
from rest_framework import status, pagination
from rest_framework import decorators
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Post, Image
from . import serializers


class BasicSizePagination(pagination.PageNumberPagination):
    page_size = 25
    page_size_query_param = 'page_size'
    max_page_size = 1000


class PostByFilters(ListAPIView):
    serializer_class = serializers.PostSerializer
    pagination_class = BasicSizePagination

    authentication_classes = ([])
    permission_classes = ([])

    def get_queryset(self):
        queryset = Post.objects.all()
        reg = self.request.query_params.get('reg', None)
        cat = self.request.query_params.get('cat', None)
        limit = self.request.query_params.get('limit', None)
        sort_by = self.request.query_params.get('sort-by', None)
        order_by = self.request.query_params.get('order-by', None)

        # By region
        if reg:
            queryset = queryset.filter(region__iexact=reg)

        # By category
        if cat:
            queryset = queryset.filter(category__iexact=cat)

        # Sort by a given field, otherwise sorty by -created_at
        sort_field = None
        if sort_by:
            sort_field = '-{0}'.format(sort_by)
        else:
            sort_field = '-created_at'

        # Order by descending order as default, othewise order by ascending
        if order_by and sort_by:
            if order_by == 'asc':
                sort_field = sort_field[1:]

        # Order queryset based on sort_field if it is set
        if sort_field:
            queryset = queryset.order_by(sort_field)
        
        return queryset


class ListAllImages(ListAPIView):

    authentication_classes = ([])
    permission_classes = ([])

    queryset = Image.objects.all()
    serializer_class = serializers.ImageSerializer