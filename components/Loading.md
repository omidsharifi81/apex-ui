# Loading Component Usage Examples

## Import

```jsx
import { Loading } from '@trustquad/shared-ui';
```

## Basic Usage (TrustQuad)

```jsx
import { Loading } from '@trustquad/shared-ui';
import logo from './assets/logo.png';

// Simple loading
<Loading logo={logo} />

// With custom text
<Loading logo={logo} text="Processing payment..." />

// Different sizes
<Loading logo={logo} size="sm" />
<Loading logo={logo} size="md" /> // default
<Loading logo={logo} size="lg" />

// Fullscreen overlay
<Loading logo={logo} fullScreen text="Loading application..." />
```

## Animation Types

```jsx
// Pulse (default - gentle scale and fade)
<Loading logo={logo} animation="pulse" />

// Spin (continuous rotation)
<Loading logo={logo} animation="spin" />

// Bounce (up and down movement)
<Loading logo={logo} animation="bounce" />

// Fade (opacity animation)
<Loading logo={logo} animation="fade" />

// Breathe (gentle scale with fade)
<Loading logo={logo} animation="breathe" />

// Glow (shadow effect - best for logos with solid backgrounds)
<Loading logo={logo} animation="glow" />
```

## Real-World Examples

### TrustQuad - Payment Processing

```jsx
import { Loading } from '@trustquad/shared-ui';
import TrustQuadLogo from '../assets/trustquad-logo.png';

function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false);

  if (isProcessing) {
    return (
      <Loading 
        logo={TrustQuadLogo} 
        text="Processing your payment..." 
        fullScreen
        animation="pulse"
      />
    );
  }

  return <div>Payment Form</div>;
}
```

### KYC - Document Verification

```jsx
import { Loading } from '@trustquad/shared-ui';
import KYCLogo from '../assets/kyc-logo.png';

function VerificationPage() {
  const [isVerifying, setIsVerifying] = useState(false);

  if (isVerifying) {
    return (
      <Loading 
        logo={KYCLogo} 
        text="Verifying your documents..." 
        fullScreen
        animation="breathe"
        size="lg"
      />
    );
  }

  return <div>Upload Form</div>;
}
```

### Inline Loading (Card Content)

```jsx
import { Card, Loading } from '@trustquad/shared-ui';
import logo from '../assets/logo.png';

function DashboardCard() {
  const [loading, setLoading] = useState(true);

  return (
    <Card>
      {loading ? (
        <Loading 
          logo={logo} 
          text="Loading data..." 
          size="sm"
          animation="spin"
        />
      ) : (
        <div>Card Content</div>
      )}
    </Card>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | string | - | Logo image URL or path (required) |
| `text` | string | 'Loading...' | Loading text below logo |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Logo size |
| `fullScreen` | boolean | false | Show as fullscreen overlay |
| `animation` | 'pulse' \| 'spin' \| 'bounce' \| 'fade' \| 'breathe' \| 'glow' | 'pulse' | Animation type |

## Recommended Animations by Use Case

- **pulse**: General purpose, subtle and professional
- **spin**: Data loading, sync operations
- **bounce**: Playful contexts, success states
- **fade**: Minimalist, background processing
- **breathe**: Long wait times, gentle and calming
- **glow**: Brand emphasis, special effects
