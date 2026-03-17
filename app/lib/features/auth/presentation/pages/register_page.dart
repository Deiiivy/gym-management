import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../providers/auth_providers.dart';

class RegisterPage extends ConsumerStatefulWidget {
  const RegisterPage({super.key});

  @override
  ConsumerState<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends ConsumerState<RegisterPage> {
  final _formKey = GlobalKey<FormState>();

  final _firstNameCtrl = TextEditingController();
  final _lastNameCtrl = TextEditingController();
  final _emailCtrl = TextEditingController();
  final _passwordCtrl = TextEditingController();
  final _phoneCtrl = TextEditingController();
  final _gymIdCtrl = TextEditingController();
  final _gymNameCtrl = TextEditingController();
  final _gymSlugCtrl = TextEditingController();

  String _role = 'CLIENT';

  @override
  void dispose() {
    _firstNameCtrl.dispose();
    _lastNameCtrl.dispose();
    _emailCtrl.dispose();
    _passwordCtrl.dispose();
    _phoneCtrl.dispose();
    _gymIdCtrl.dispose();
    _gymNameCtrl.dispose();
    _gymSlugCtrl.dispose();
    super.dispose();
  }

  bool get _needsGymId => _role == 'TRAINER' || _role == 'CLIENT';
  bool get _needsGymCreate => _role == 'GYM_OWNER';

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;

    final success = await ref.read(authControllerProvider.notifier).register(
          firstName: _firstNameCtrl.text.trim(),
          lastName: _lastNameCtrl.text.trim(),
          email: _emailCtrl.text.trim(),
          password: _passwordCtrl.text.trim(),
          role: _role,
          phone: _phoneCtrl.text.trim().isEmpty ? null : _phoneCtrl.text.trim(),
          gymId: _needsGymId && _gymIdCtrl.text.trim().isNotEmpty
              ? _gymIdCtrl.text.trim()
              : null,
          gymName: _needsGymCreate && _gymNameCtrl.text.trim().isNotEmpty
              ? _gymNameCtrl.text.trim()
              : null,
          gymSlug: _needsGymCreate && _gymSlugCtrl.text.trim().isNotEmpty
              ? _gymSlugCtrl.text.trim()
              : null,
        );

    if (!mounted) return;

    if (success) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Registro exitoso')),
      );
      Navigator.pop(context);
    }
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(authControllerProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Registro')),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 500),
              child: Card(
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        DropdownButtonFormField<String>(
                          initialValue: _role,
                          decoration: const InputDecoration(
                            labelText: 'Rol',
                            border: OutlineInputBorder(),
                          ),
                          items: const [
                            DropdownMenuItem(
                              value: 'CLIENT',
                              child: Text('Cliente'),
                            ),
                            DropdownMenuItem(
                              value: 'TRAINER',
                              child: Text('Entrenador'),
                            ),
                            DropdownMenuItem(
                              value: 'GYM_OWNER',
                              child: Text('Dueño de gimnasio'),
                            ),
                          ],
                          onChanged: (value) {
                            if (value == null) return;
                            setState(() => _role = value);
                          },
                        ),
                        const SizedBox(height: 16),
                        TextFormField(
                          controller: _firstNameCtrl,
                          decoration: const InputDecoration(
                            labelText: 'Nombre',
                            border: OutlineInputBorder(),
                          ),
                          validator: (v) =>
                              v == null || v.isEmpty ? 'Campo requerido' : null,
                        ),
                        const SizedBox(height: 16),
                        TextFormField(
                          controller: _lastNameCtrl,
                          decoration: const InputDecoration(
                            labelText: 'Apellido',
                            border: OutlineInputBorder(),
                          ),
                          validator: (v) =>
                              v == null || v.isEmpty ? 'Campo requerido' : null,
                        ),
                        const SizedBox(height: 16),
                        TextFormField(
                          controller: _emailCtrl,
                          decoration: const InputDecoration(
                            labelText: 'Correo',
                            border: OutlineInputBorder(),
                          ),
                          validator: (v) =>
                              v == null || v.isEmpty ? 'Campo requerido' : null,
                        ),
                        const SizedBox(height: 16),
                        TextFormField(
                          controller: _passwordCtrl,
                          obscureText: true,
                          decoration: const InputDecoration(
                            labelText: 'Contraseña',
                            border: OutlineInputBorder(),
                          ),
                          validator: (v) {
                            if (v == null || v.length < 8) {
                              return 'Mínimo 8 caracteres';
                            }
                            return null;
                          },
                        ),
                        const SizedBox(height: 16),
                        TextFormField(
                          controller: _phoneCtrl,
                          decoration: const InputDecoration(
                            labelText: 'Teléfono',
                            border: OutlineInputBorder(),
                          ),
                        ),
                        if (_needsGymId) ...[
                          const SizedBox(height: 16),
                          TextFormField(
                            controller: _gymIdCtrl,
                            decoration: const InputDecoration(
                              labelText: 'Gym ID',
                              border: OutlineInputBorder(),
                            ),
                            validator: (v) {
                              if (_needsGymId && (v == null || v.isEmpty)) {
                                return 'Gym ID requerido';
                              }
                              return null;
                            },
                          ),
                        ],
                        if (_needsGymCreate) ...[
                          const SizedBox(height: 16),
                          TextFormField(
                            controller: _gymNameCtrl,
                            decoration: const InputDecoration(
                              labelText: 'Nombre del gimnasio',
                              border: OutlineInputBorder(),
                            ),
                            validator: (v) {
                              if (_needsGymCreate &&
                                  (v == null || v.isEmpty)) {
                                return 'Nombre requerido';
                              }
                              return null;
                            },
                          ),
                          const SizedBox(height: 16),
                          TextFormField(
                            controller: _gymSlugCtrl,
                            decoration: const InputDecoration(
                              labelText: 'Slug del gimnasio',
                              border: OutlineInputBorder(),
                            ),
                            validator: (v) {
                              if (_needsGymCreate &&
                                  (v == null || v.isEmpty)) {
                                return 'Slug requerido';
                              }
                              return null;
                            },
                          ),
                        ],
                        const SizedBox(height: 16),
                        if (state.errorMessage != null)
                          Padding(
                            padding: const EdgeInsets.only(bottom: 12),
                            child: Text(
                              state.errorMessage!,
                              style: const TextStyle(color: Colors.red),
                            ),
                          ),
                        SizedBox(
                          width: double.infinity,
                          height: 48,
                          child: ElevatedButton(
                            onPressed: state.isLoading ? null : _submit,
                            child: state.isLoading
                                ? const CircularProgressIndicator()
                                : const Text('Registrarme'),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}