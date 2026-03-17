import '../entities/auth_session.dart';
import '../repositories/auth_repository.dart';

class RegisterUseCase {
  final AuthRepository repository;

  RegisterUseCase(this.repository);

  Future<AuthSession> call({
    required String firstName,
    required String lastName,
    required String email,
    required String password,
    required String role,
    String? gymId,
    String? gymName,
    String? gymSlug,
    String? phone,
  }) {
    return repository.register(
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
      gymId: gymId,
      gymName: gymName,
      gymSlug: gymSlug,
      phone: phone,
    );
  }
}