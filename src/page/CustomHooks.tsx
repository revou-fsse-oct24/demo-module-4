import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Define our types
interface UserSettings {
  theme: "light" | "dark" | "system";
  fontSize: number;
  notifications: boolean;
}

const defaultSettings: UserSettings = {
  theme: "system",
  fontSize: 16,
  notifications: true,
};

const UserSettingsPanel: React.FC = () => {
  const [settings, setSettings] = useLocalStorage<UserSettings>(
    "userSettings",
    defaultSettings
  );

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value as UserSettings["theme"];
    setSettings((prev) => ({ ...prev, theme: newTheme }));
  };

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(event.target.value);
    setSettings((prev) => ({ ...prev, fontSize: newSize }));
  };

  const handleNotificationsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSettings((prev) => ({ ...prev, notifications: event.target.checked }));
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">User Settings</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Theme</label>
          <select
            value={settings.theme}
            onChange={handleThemeChange}
            className="w-full p-2 border rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Font Size: {settings.fontSize}px
          </label>
          <input
            type="range"
            min="12"
            max="24"
            value={settings.fontSize}
            onChange={handleFontSizeChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={handleNotificationsChange}
              className="rounded"
            />
            <span className="text-sm font-medium">Enable Notifications</span>
          </label>
        </div>

        <div className="mt-4 p-2 bg-gray-50 rounded">
          <pre className="text-sm">{JSON.stringify(settings, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPanel;
