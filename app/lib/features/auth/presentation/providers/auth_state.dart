import '../../domain/entities/auth_session.dart';

class AuthState {
  final bool isLoading;
  final AuthSession? session;
  final String? errorMessage;

  const AuthState({
    this.isLoading = false,
    this.session,
    this.errorMessage,
  });

  AuthState copyWith({
    bool? isLoading,
    AuthSession? session,
    String? errorMessage,
    bool clearError = false,
  }) {
    return AuthState(
      isLoading: isLoading ?? this.isLoading,
      session: session ?? this.session,
      errorMessage: clearError ? null : (errorMessage ?? this.errorMessage),
    );
  }
}