from rest_framework import status, pagination
from rest_framework.decorators import (
    authentication_classes, permission_classes
)
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Post, Image
from . import serializers


@authentication_classes([])
@permission_classes([])
class ListAllPosts(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer


@authentication_classes([])
@permission_classes([])
class ListAllImages(ListAPIView):
    queryset = Image.objects.all()
    serializer_class = serializers.ImageSerializer

# @authentication_classes([])
# @permission_classes([])
# class ListNewStores(ListAPIView):
#     queryset = Store.objects.filter(status='active').order_by('-id')[:16]
#     serializer_class = NewStoreSerializer


# @authentication_classes([])
# @permission_classes([])
# class ListAllImages(ListAPIView):
#     queryset = Image.objects.order_by('-id')[:15]
#     serializer_class = ImageSerializer


# @authentication_classes([])
# @permission_classes([])
# class ListAllStoreNamesDomains(ListAPIView):
#     queryset = Store.objects.all()
#     serializer_class = StoreNameDomainSerializer


# class StoreSearchPagination(pagination.PageNumberPagination):
#     page_size = 10


# @authentication_classes([])
# @permission_classes([])
# class StoreSearch(ListAPIView):
#     serializer_class = StoreSerializer
#     pagination_class = StoreSearchPagination

#     def get_queryset(self):
#         queryset = Store.objects.filter(status='active')
#         q = self.request.query_params.get('q', None)

#         if q is not None:
#             queryset = queryset.filter(Q(businessName__icontains=q)
#                                        | Q(relatedName__icontains=q)
#                                        | Q(mKey__icontains=q)
#                                        | Q(website__icontains=q)
#                                        | Q(website__icontains='www.' + q)
#                                        | Q(domainKey__icontains=q))
#         return queryset


# @authentication_classes([])
# @permission_classes([])
# class StoreDetail(RetrieveAPIView):
#     queryset = Store.objects.all()
#     serializer_class = StoreSerializer
#     lookup_field = 'domainKey'


# class SimilarStorePagination(pagination.PageNumberPagination):
#     page_size = 5


# @authentication_classes([])
# @permission_classes([])
# class ListSimilarStores(ListAPIView):
#     serializer_class = TestSimilarStoreSerializer
#     pagination_class = SimilarStorePagination

#     def get_queryset(self):
#         store_domainKey = self.request.query_params.get('q', None)
#         store = get_object_or_404(Store, domainKey=store_domainKey)
#         if 'www.' in store.website:
#             store.website = store.website[4:]

#         temp_similar_stores = SimilarStore.objects.filter(store=store)
#         all_stores = Store.objects.filter(status='active')

#         queryset = []

#         for ss in temp_similar_stores:
#             for s in all_stores:
#                 if 'www.' in s.website:
#                     s.website = s.website[4:]
#                 if ss.domain == s.website and s.website != store.website:
#                     queryset.append(Store.objects.get(
#                         Q(website=s.website) | Q(website='www.' + s.website)))
#                     # queryset.append([Store.objects.filter(
#                     #     Q(website=s.website) | Q(website='www.' + s.website)), float(ss.score)])

#         return queryset


# # ----------------------------------------------------------------------
# # For Feed component to render random images with store domain key
# class ImagePagination(pagination.PageNumberPagination):
#     page_size = 30


# @authentication_classes([])
# @permission_classes([])
# class ListRandomImages(ListAPIView):
#     queryset = Image.objects.order_by('?')
#     serializer_class = ImageRandomSerializer
#     pagination_class = ImagePagination
# # ----------------------------------------------------------------------
