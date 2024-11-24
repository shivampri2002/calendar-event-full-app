import firebase_admin
from firebase_admin import credentials, auth
from rest_framework import authentication
from rest_framework import exceptions
from django.conf import settings
from django.contrib.auth.models import User 

cred = credentials.Certificate(settings.FIREBASE_CREDENTIALS_PATH)
firebase_admin.initialize_app(cred)

class FirebaseAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.META.get('HTTP_AUTHORIZATION')
        if not auth_header:
            return None

        id_token = auth_header.split(' ').pop()
        try:
            decoded_token = auth.verify_id_token(id_token)
            uid = decoded_token['uid']  # Get UID from decoded token

            # Retrieve or create user based on UID
            user, created = User.objects.get_or_create(username=uid)
            
            return (user, None)
        except Exception:
            raise exceptions.AuthenticationFailed('Invalid token')
