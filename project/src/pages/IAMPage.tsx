import React, { useState } from 'react';
import { Shield, User, Plus, Search, Check, X, ChevronDown, UserPlus, Key, Lock, Settings } from 'lucide-react';

// Sample roles data
const predefinedRoles = [
  {
    id: 'admin',
    name: 'Administrator',
    description: 'Full access to all resources',
    permissions: ['*.*'],
  },
  {
    id: 'developer',
    name: 'Developer',
    description: 'Can manage adapters and view resources',
    permissions: ['adapters.*', 'network.view', 'database.view'],
  },
  {
    id: 'viewer',
    name: 'Viewer',
    description: 'Can view all resources',
    permissions: ['*.view'],
  },
  {
    id: 'database-admin',
    name: 'Database Administrator',
    description: 'Full access to database resources',
    permissions: ['database.*'],
  },
];

// Sample members data
const members = [
  {
    id: 1,
    email: 'admin@nexuscloud.dev',
    name: 'Admin User',
    role: 'Administrator',
    status: 'Active',
    lastActive: '2 minutes ago',
    mfa: true,
  },
  {
    id: 2,
    email: 'john.doe@nexuscloud.dev',
    name: 'John Doe',
    role: 'Developer',
    status: 'Active',
    lastActive: '1 hour ago',
    mfa: true,
  },
  {
    id: 3,
    email: 'jane.smith@nexuscloud.dev',
    name: 'Jane Smith',
    role: 'Database Administrator',
    status: 'Active',
    lastActive: '3 hours ago',
    mfa: false,
  },
  {
    id: 4,
    email: 'viewer@nexuscloud.dev',
    name: 'Viewer Account',
    role: 'Viewer',
    status: 'Inactive',
    lastActive: '2 days ago',
    mfa: false,
  },
];

function IAMPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [showRoleDialog, setShowRoleDialog] = useState(false);

  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || member.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Identity & Access Management</h1>
          <p className="text-slate-400 mt-2">Manage user access and permissions</p>
        </div>
        <button 
          onClick={() => setShowRoleDialog(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors"
        >
          <UserPlus className="h-4 w-4" />
          Add Member
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <User className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Total Members</p>
              <p className="text-2xl font-semibold">{members.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Shield className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Custom Roles</p>
              <p className="text-2xl font-semibold">{predefinedRoles.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Key className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">MFA Enabled</p>
              <p className="text-2xl font-semibold">
                {members.filter(m => m.mfa).length}/{members.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">All Roles</option>
          {predefinedRoles.map(role => (
            <option key={role.id} value={role.name}>{role.name}</option>
          ))}
        </select>
      </div>

      {/* Members Table */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Member</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Last Active</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Security</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.id} className="border-b border-slate-700 hover:bg-slate-700/30">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{member.name}</div>
                        <div className="text-sm text-slate-400">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-400/10 text-purple-400">
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      member.status === 'Active' 
                        ? 'bg-green-400/10 text-green-400' 
                        : 'bg-slate-400/10 text-slate-400'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-slate-300">{member.lastActive}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        member.mfa
                          ? 'bg-green-400/10 text-green-400'
                          : 'bg-yellow-400/10 text-yellow-400'
                      }`}>
                        {member.mfa ? 'MFA Enabled' : 'MFA Disabled'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="p-1 hover:bg-slate-700 rounded" title="Edit">
                        <Settings className="h-4 w-4 text-slate-400" />
                      </button>
                      <button className="p-1 hover:bg-slate-700 rounded" title="Manage Permissions">
                        <Lock className="h-4 w-4 text-slate-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Roles Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Roles & Permissions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {predefinedRoles.map((role) => (
            <div key={role.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{role.name}</h3>
                <button className="text-slate-400 hover:text-white">
                  <Settings className="h-4 w-4" />
                </button>
              </div>
              <p className="text-slate-400 text-sm mb-4">{role.description}</p>
              <div className="space-y-2">
                {role.permissions.map((permission, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <Check className="h-4 w-4 text-purple-400" />
                    <span className="text-slate-300">{permission}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IAMPage;