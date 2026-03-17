import '../../domain/entities/auth_session.dart';
import '../../domain/repositories/auth_repository.dart';
import '../datasource/auth_remote_datasource.dart';
import '../models/login_request_model.dart';
import '../models/register_request_model.dart';

class AuthRepositoryImpl implements AuthRepository {
  final AuthRemoteDataSource remoteDataSource;

  AuthRepositoryImpl(this.remoteDataSource);

  @override
  Future<AuthSession> login({
    required String email,
    required String password,
  }) {
    return remoteDataSource.login(
      LoginRequestModel(
        email: email,
        password: password,
      ),
    );
  }

  @override
  Future<AuthSession> register({
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
    return remoteDataSource.register(
      RegisterRequestModel(
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: role,
        gymId: gymId,
        gymName: gymName,
        gymSlug: gymSlug,
        phone: phone,
      ),
    );
  }
}