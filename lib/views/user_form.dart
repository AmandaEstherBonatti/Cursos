import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_crud/provider/users.dart';
import 'package:provider/provider.dart';

import '../models/user.dart';

class UserForm extends StatelessWidget {
  final _form = GlobalKey<FormState>();
  final Map<String, String> _formData = {};
  final object = {"update", "user"};

  void _loadFormData(User user) {
    if (user.id != null) {
      _formData['id'] = user.id.toString();
      _formData['name'] = user.name.toString();
      _formData['email'] = user.email.toString();
      _formData['avatarUrl'] = user.avatarUrl.toString();
    }
  }

  @override
  Widget build(BuildContext context) {
    final ctx = ModalRoute.of(context)?.settings.arguments as Map;
    final update = ctx["update"];
    if (update == true) {
      final user = ctx["user"];
      _loadFormData(user);
    }

    return Scaffold(
      appBar: AppBar(
        title: Text('Formulário de usuário'),
        actions: <Widget>[
          IconButton(
            onPressed: () {
              final isValid = _form.currentState?.validate();
              if (isValid!) {
                _form.currentState?.save();
                Provider.of<Users>(context, listen: false).put(User(
                  id: _formData['id'].toString(),
                  name: _formData['name'].toString(),
                  email: _formData['email'].toString(),
                  avatarUrl: _formData['avatarUrl'].toString(),
                ));
                Navigator.of(context).pop();
              }
            },
            icon: Icon(Icons.save),
          ),
        ],
      ),
      body: Padding(
        padding: EdgeInsets.all(15),
        child: Form(
          key: _form,
          child: Column(
            children: <Widget>[
              TextFormField(
                  initialValue: _formData['name'],
                  decoration: InputDecoration(labelText: 'Nome'),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'ocorreu um erro';
                    }
                    if (value.trim().length < 3) {
                      return 'Nome muito pequeno';
                    }

                    return null;
                  },
                  onSaved: (value) {
                    _formData['name'] = value.toString();
                  }),
              TextFormField(
                  initialValue: _formData['email'],
                  decoration: InputDecoration(labelText: 'Email'),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'ocorreu um erro';
                    }
                    return null;
                  },
                  onSaved: (value) => _formData['email'] = value!),
              TextFormField(
                  initialValue: _formData['avatarUrl'],
                  decoration: InputDecoration(labelText: 'URL do A avatar'),
                  onSaved: (value) =>
                      _formData['avatarUrl'] = value.toString()),
            ],
          ),
        ),
      ),
    );
  }
}
