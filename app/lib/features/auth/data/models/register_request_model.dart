class RegisterRequestModel {
  final String firstName;
  final String lastName;
  final String email;
  final String password;
  final String role;
  final String? gymId;
  final String? gymName;
  final String? gymSlug;
  final String? phone;

  const RegisterRequestModel({
    required this.firstName,
    required this.lastName,
    required this.email,
    required this.password,
    required this.role,
    this.gymId,
    this.gymName,
    this.gymSlug,
    this.phone,
  });

  Map<String, dynamic> toJson() {
    return {
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'password': password,
      'role': role,
      'gymId': gymId,
      'gymName': gymName,
      'gymSlug': gymSlug,
      'phone': phone,
    }..removeWhere((key, value) => value == null);
  }
}