
import React, { useState } from 'react';
import { Save, Eye, EyeOff } from 'lucide-react';

export const AccountSettings: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+39 123 456 7890',
    language: 'EN'
  });
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    setMessage(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setTimeout(() => setMessage(null), 3000);
    }, 1000);
  };

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    setIsLoading(true);
    setMessage(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setShowPasswordForm(false);
      setTimeout(() => setMessage(null), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
          Account Settings
        </h1>
        <p className="text-gray-600">
          Manage your personal information and preferences
        </p>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {message.text}
        </div>
      )}

      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-black mb-6">Personal Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language Preference
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
            >
              <option value="EN">English</option>
              <option value="IT">Italiano</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSaveProfile}
            disabled={isLoading}
            className="flex items-center space-x-2 bg-[#078147] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-colors disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            <span>{isLoading ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-black mb-6">Password</h2>
        
        {!showPasswordForm ? (
          <div>
            <p className="text-gray-600 mb-4">
              Keep your account secure with a strong password
            </p>
            <button
              onClick={() => setShowPasswordForm(true)}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Change Password
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.current ? "text" : "password"}
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords({...showPasswords, current: !showPasswords.current})}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.new ? "text" : "password"}
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords({...showPasswords, new: !showPasswords.new})}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords({...showPasswords, confirm: !showPasswords.confirm})}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleChangePassword}
                disabled={isLoading}
                className="bg-[#078147] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Updating...' : 'Update Password'}
              </button>
              <button
                onClick={() => {
                  setShowPasswordForm(false);
                  setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                }}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
