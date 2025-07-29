// pages/SettingsPage.tsx
import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'en',
    privacy: 'public'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      
      <div className="settings-sections">
        <section className="settings-section">
          <h2>General</h2>
          <div className="setting-item">
            <label>
              <input 
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
              />
              Enable Notifications
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input 
                type="checkbox"
                checked={settings.darkMode}
                onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
              />
              Dark Mode
            </label>
          </div>
        </section>

        <section className="settings-section">
          <h2>Language & Region</h2>
          <div className="setting-item">
            <label>Language:</label>
            <select 
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </section>

        <section className="settings-section">
          <h2>Privacy</h2>
          <div className="setting-item">
            <label>Profile visibility:</label>
            <select 
              value={settings.privacy}
              onChange={(e) => handleSettingChange('privacy', e.target.value)}
            >
              <option value="public">Public</option>
              <option value="friends">Friends only</option>
              <option value="private">Private</option>
            </select>
          </div>
        </section>

        <section className="settings-section">
          <h2>Site-specific Settings</h2>
          <button onClick={() => window.location.href = '/settings/main/language'}>
            Configure Main Site Language
          </button>
        </section>
      </div>

      <div className="settings-actions">
        <button className="save-button">Save Changes</button>
        <button className="reset-button">Reset to Defaults</button>
      </div>
    </div>
  );
};

export default SettingsPage;
