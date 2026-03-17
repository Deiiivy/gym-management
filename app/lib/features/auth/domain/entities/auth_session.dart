import 'package:equatable/equatable.dart';

import 'auth_user.dart';

class AuthSession extends Equatable {
  final String accessToken;
  final AuthUser user;

  const AuthSession({
    required this.accessToken,
    required this.user,
  });

  @override
  List<Object?> get props => [accessToken, user];
}