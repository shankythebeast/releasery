import Users from 'meteor/nova:users';

/*
  Let's create a new "mods" group that can edit and delete any posts
*/

Users.createGroup("mods");

Users.groups.mods.can("users.edit.own"); // mods can edit anybody's posts
Users.groups.mods.can("posts.remove.all"); // mods can delete anybody's posts