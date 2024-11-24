from django.db import models
# from django.utils import timezone

class CalendarEvent(models.Model):
    user_id = models.CharField(max_length=128)  # Firebase UID
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['start_time']
        indexes = [
            models.Index(fields=['user_id', 'start_time']),
        ]

    def __str__(self):
        return f"{self.title} - {self.start_time}"