# API Architecture Convention (DDD + Hexagonal + REST)

## 📚 Overview

The API follows **Domain-Driven Design (DDD)** combined with **Hexagonal Architecture (Ports & Adapters)** using **REST (HTTP controllers)** instead of GraphQL.

This ensures:
- Separation of concerns
- Scalability
- Testability
- Maintainability

---

## 🏗️ Architecture Layers (Inside-Out)

```
infrastructure → application → domain
```

---

## 📦 Module Structure

```
src/modules/{module}/
├── domain/
├── application/
└── infrastructure/
```

---

## 🔍 Flow Example

```
HTTP Request → Controller → UseCase → Repository → Domain → Response
```

---

## 🔐 RBAC

Permissions are resolved based on role in the domain and returned in application layer.

---

## ✅ Conclusion

Architecture: **DDD + Hexagonal + REST (NestJS)**
