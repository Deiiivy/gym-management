import '../../domain/entities/auth_session.dart';
import 'auth_user_model.dart';

class AuthSessionModel extends AuthSession {
  const AuthSessionModel({
    required super.accessToken,
    required super.user,
  });

  factory AuthSessionModel.fromJson(Map<String, dynamic> json) {
    return AuthSessionModel(
      accessToken: json['accessToken'] as String,
      user: AuthUserModel.fromJson(json['user'] as Map<String, dynamic>),
    );
  }
}