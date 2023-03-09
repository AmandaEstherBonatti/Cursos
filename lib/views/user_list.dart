import 'package:flutter/material.dart';
import 'package:flutter_crud/components/user_tile.dart';
import 'package:flutter_crud/data/dummy_users.dart';
import 'package:flutter_crud/models/user.dart';
import 'package:flutter_crud/provider/users.dart';
import 'package:provider/provider.dart';

import '../routes/app_routes.dart';

class UserList extends StatelessWidget {
  const UserList({super.key});

  @override
  Widget build(BuildContext context) {
    final Users users = Provider.of(context);
    bool update = false;

    return Scaffold(
      appBar: AppBar(title: const Text('Lista de Usuário'), actions: <Widget>[
        // ignore: prefer_const_constructors
        IconButton(
            onPressed: () {
              Navigator.of(context)
                  .pushNamed(AppRoutes.USER_FORM, arguments: {'update': false});
            },
            icon: Icon(Icons.add))
      ]),
      body: ListView.builder(
        itemCount: users.count,
        itemBuilder: (context, i) => UserTile(
          users.byIndex(i),
        ),
      ),
    );
  }
}
