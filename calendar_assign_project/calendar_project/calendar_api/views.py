from rest_framework import viewsets, permissions
# from rest_framework.response import Response
from .models import CalendarEvent
from .serializers import CalendarEventSerializer

class CalendarEventViewSet(viewsets.ModelViewSet):
    serializer_class = CalendarEventSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return CalendarEvent.objects.filter(user_id=self.request.user.username)

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user.username)