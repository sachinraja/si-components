% do not directly depend on simple-icons
gen_enforced_dependency(WorkspaceCwd, 'simple-icons', null, 'dependencies') :-
    \+ workspace_field(WorkspaceCwd, 'private', true).

% must have simple-icons in peerDependencies
gen_enforced_dependency(WorkspaceCwd, 'simple-icons', '*', 'peerDependencies') :-
    \+ workspace_field(WorkspaceCwd, 'private', true).

% Enforces the license in all public workspaces while removing it from private workspaces
gen_enforced_field(WorkspaceCwd, 'license', 'MIT') :-
  \+ workspace_field(WorkspaceCwd, 'private', true).
gen_enforced_field(WorkspaceCwd, 'license', null) :-
  workspace_field(WorkspaceCwd, 'private', true).
