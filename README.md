# @apex-ui/components

> Premium UI component library built with React and Tailwind CSS

A modern, accessible, and fully customizable component library designed for building beautiful payment gateways, fintech applications, and enterprise dashboards.

## ✨ Features

- 🎨 **Beautiful Design** - Carefully crafted components with modern aesthetics
- ♿ **Accessible** - ARIA compliant and keyboard navigable
- 🎯 **Tailwind CSS** - Fully customizable with Tailwind utility classes
- 📦 **Tree-shakeable** - Import only what you need
- 🔧 **TypeScript Ready** - Full TypeScript definitions included
- 🚀 **Production Ready** - Battle-tested in real-world applications

## 📦 Installation

```bash
npm install @apex-ui/components
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react tailwindcss lucide-react clsx
```

## 🚀 Quick Start

### 1. Import Components

```jsx
import { Card, CardHeader, CardContent, SelectableCard } from '@apex-ui/components';
```

### 2. Use in Your App

```jsx
function App() {
  return (
    <Card>
      <CardHeader 
        title="Welcome to Apex UI" 
        description="Premium components for modern applications"
      />
      <CardContent>
        <p>Your content here</p>
      </CardContent>
    </Card>
  );
}
```

### 3. Import Styles

In your main CSS file:

```css
@import '@apex-ui/components/styles/index.css';
```

### 4. Configure Tailwind

In your `tailwind.config.js`:

```js
module.exports = {
  presets: [
    require('@apex-ui/components/tailwind.config.js')
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@apex-ui/components/**/*.{js,jsx}'
  ],
  // your customizations
}
```

## 📚 Available Components

### Layout Components
- **Card** - Container with header, content, and footer sections
- **CardHeader** - Card header with title and description
- **CardContent** - Main content area
- **CardFooter** - Footer section

### Form Components
- **SelectableCard** - Interactive card for radio-style selections
- **Checkbox** - Standard checkbox input
- **CheckboxButton** - Checkbox styled as a button
- **SettingToggle** - Toggle switch for settings

### Modal Components
- **ConfirmationModal** - Confirm/cancel dialog modal

### Utilities
- **validateRequiredFields** - Form validation helper
- **validateField** - Single field validation
- **getNestedValue** - Get nested object values safely

## 🎨 Customization

All components use Tailwind CSS classes and can be customized through:

1. **Tailwind Config** - Extend colors, spacing, etc.
2. **CSS Variables** - Override component-specific variables
3. **className Props** - Pass custom classes to components

Example:

```jsx
<SelectableCard
  className="custom-shadow hover:scale-105"
  selected={isSelected}
  title="Custom Style"
/>
```

## 📖 Component Examples

### SelectableCard

```jsx
import { SelectableCard } from '@apex-ui/components';
import { Mail, MessageSquare } from 'lucide-react';

function EmailSettings() {
  const [provider, setProvider] = useState('smtp');
  
  return (
    <div className="grid grid-cols-2 gap-4">
      <SelectableCard
        selected={provider === 'smtp'}
        onSelect={() => setProvider('smtp')}
        title="SMTP"
        description="Use custom SMTP server"
        icon={<Mail className="w-5 h-5" />}
      />
      <SelectableCard
        selected={provider === 'api'}
        onSelect={() => setProvider('api')}
        title="API"
        description="Use email service API"
        icon={<MessageSquare className="w-5 h-5" />}
      />
    </div>
  );
}
```

### Form Validation

```jsx
import { validateRequiredFields } from '@apex-ui/components';

const schema = {
  email: { required: true, type: 'email', label: 'Email Address' },
  password: { required: true, minLength: 6, label: 'Password' }
};

const validation = validateRequiredFields(formData, schema);
if (!validation.isValid) {
  toast.error(validation.errors[0].message);
}
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/apex-ui/components.git

# Install dependencies
npm install

# Build the package
npm run build
```

## 📄 License

MIT © Apex UI Team

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines first.

## 🐛 Bug Reports

Found a bug? Please open an issue on [GitHub](https://github.com/apex-ui/components/issues).

## 📮 Contact

- GitHub: [@apex-ui](https://github.com/apex-ui)
- NPM: [@apex-ui/components](https://www.npmjs.com/package/@apex-ui/components)

---

Made with ❤️ by the Apex UI Team
