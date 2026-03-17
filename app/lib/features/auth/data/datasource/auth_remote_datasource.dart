import 'package:dio/dio.dart';

import '../models/auth_session_model.dart';
import '../models/login_request_model.dart';
import '../models/register_request_model.dart';

class AuthRemoteDataSource {
  final Dio dio;

  AuthRemoteDataSource(this.dio);

  Future<AuthSessionModel> login(LoginRequestModel request) async {
    final response = await dio.post(
      '/auth/login',
      data: request.toJson(),
    );

    return AuthSessionModel.fromJson(response.data as Map<String, dynamic>);
  }

  Future<AuthSessionModel> register(RegisterRequestModel request) async {
    final response = await dio.post(
      '/auth/register',
      data: request.toJson(),
    );

    return AuthSessionModel.fromJson(response.data as Map<String, dynamic>);
  }
}