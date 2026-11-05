import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. Amazon Web Services (AWS)
export const AwsIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 153"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M136.2 38.6c0 4.1.3 7.8 1 11.2l-14.8 2.2c-.7-3.2-1-7.2-1-12 0-9.8 2.8-17.5 8.3-23.2C135.2 11.1 142.7 8 152.4 8c9.1 0 16.3 2.9 21.6 8.7 5.3 5.8 8 13.9 8 24.3v42.9c0 3.8.4 7.2 1.2 10.2l-15.3 2.2c-.8-2.6-1.3-6.2-1.5-10.7-3.2 4.1-7.3 7.2-12.4 9.4-5.1 2.2-10.8 3.3-17.2 3.3-8.8 0-16-2.6-21.7-7.7-5.7-5.2-8.5-12.3-8.5-21.4 0-9.6 3.2-17.1 9.7-22.3 6.5-5.3 15.6-8.2 27.4-8.8l21.2-1.1v-5.2c0-5.8-1.5-10.3-4.5-13.4-3-3.1-7.4-4.7-13.3-4.7-4.9 0-9.2 1.1-12.9 3.3-3.8 2.2-6.5 5.5-8.2 9.9zm33.3 35.8l-18.7 1c-6.8.4-12 2-15.6 4.9-3.6 2.8-5.4 7-5.4 12.3 0 5 1.5 8.9 4.6 11.8 3.1 2.9 7.4 4.3 12.9 4.3 5.6 0 10.4-1.5 14.5-4.6 4.1-3.1 6.7-7.3 7.7-12.7v-17z"
      fill="#FF9900"
    />
    <path
      d="M93.3 103.5l-17.9-63-17.7 63H39.8L12.5 10.8h17.9l19.5 70.8L68.2 18h16.5l18.5 63.6 19.5-70.8h17.9l-27.3 92.7H93.3z"
      fill="#FFFFFF"
    />
    <path
      d="M211.5 104.2c-7.9 0-15.1-1.6-21.6-4.9l4.5-14c5.7 3.2 11.6 4.8 17.7 4.8 4.6 0 8.1-1 10.5-3 2.4-2 3.6-4.6 3.6-7.8 0-2.8-.9-5.1-2.8-6.9-1.9-1.8-5.3-3.6-10.4-5.3-8.4-2.8-14.4-6-17.8-9.6-3.4-3.6-5.2-8.3-5.2-14.1 0-7.7 2.8-13.7 8.5-18.1 5.7-4.4 13.2-6.6 22.5-6.6 6.8 0 13.4 1.3 19.9 3.8l-4.5 13.6c-5.2-2.3-10.4-3.5-15.7-3.5-4.4 0-7.8.9-10.1 2.8-2.3 1.9-3.5 4.3-3.5 7.4 0 2.6.9 4.7 2.8 6.4 1.9 1.7 5.2 3.4 10 5 8.6 2.9 14.7 6.1 18.2 9.8 3.5 3.6 5.3 8.4 5.3 14.3 0 7.8-2.9 13.9-8.8 18.4-5.9 4.3-13.8 6.5-23.7 6.5z"
      fill="#FFFFFF"
    />
    <path
      d="M228.8 131.6c-26.8 19.7-65.7 30.1-99.3 30.1-47.3 0-89.9-17.4-122.2-46.4-2.6-2.3-.3-5.4 2.8-3.7 34.6 19.6 77.2 31.4 121.3 31.4 29.8 0 64.3-8.9 95.1-27.4 4.5-2.7 8.3 3.8 2.3 8z"
      fill="#FF9900"
    />
    <path
      d="M241.6 117.7c-3.4-4.4-22.5-2.1-31.1-1.1-2.6.3-3-2-.7-3.7 15.2-10.8 40.1-7.7 43.1-3.9 3.1 3.9-2.2 28.5-16.7 40.2-2.2 1.8-4.4.8-3.4-1.5 3.2-7.5 12.2-25.6 8.8-30z"
      fill="#FF9900"
    />
  </svg>
);

// 2. Linux (Tux Mascot Vector)
export const LinuxIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Body Base */}
    <path
      d="M64 8c-18 0-30 14-30 38 0 16 5 28 8 36-6 6-12 16-12 28 0 8 5 14 14 16 10 2 24-2 36-2s26 4 36 2c9-2 14-8 14-16 0-12-6-22-12-28 3-8 8-20 8-36 0-24-12-38-30-38z"
      fill="#1A1A1A"
    />
    {/* White Belly */}
    <path
      d="M64 48c-14 0-24 16-24 38 0 18 10 32 24 32s24-14 24-32c0-22-10-38-24-38z"
      fill="#FAFAFA"
    />
    {/* Eyes */}
    <ellipse cx="56" cy="36" rx="4" ry="7" fill="#FFFFFF" />
    <ellipse cx="72" cy="36" rx="4" ry="7" fill="#FFFFFF" />
    <circle cx="57" cy="37" r="2.5" fill="#000000" />
    <circle cx="71" cy="37" r="2.5" fill="#000000" />
    {/* Beak */}
    <path
      d="M64 42c-8 0-11 4-11 7 0 6 7 9 11 9s11-3 11-9c0-3-3-7-11-7z"
      fill="#FFA726"
    />
    {/* Feet */}
    <path
      d="M38 114c-8 0-14 4-14 8 0 3 6 4 14 4 10 0 18-3 18-7s-8-5-18-5zm52 0c-10 0-18 1-18 5s8 7 18 7c8 0 14-1 14-4 0-4-6-8-14-8z"
      fill="#FB8C00"
    />
  </svg>
);

// 3. Proxmox (Official Virtual Environment Logo)
export const ProxmoxIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="36" fill="#18181B" />
    {/* Stylized Proxmox Orange Hex/Shield Polygon */}
    <path
      d="M128 32l78 45v90l-78 45-78-45V77l78-45z"
      fill="#E57000"
      opacity="0.95"
    />
    {/* Inner Cutouts & Architecture Cross */}
    <path
      d="M128 62l52 30v60l-52 30-52-30V92l52-30z"
      fill="#18181B"
    />
    <path
      d="M128 85l32 18v38l-32 18-32-18v-38l32-18z"
      fill="#FF8A00"
    />
    <circle cx="128" cy="122" r="14" fill="#FFFFFF" />
  </svg>
);

// 4. Datadog (Signature Mascot Dog "Bits")
export const DatadogIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="36" fill="#632CA6" />
    {/* Datadog Mascot Path */}
    <g fill="#FFFFFF" transform="translate(42, 38) scale(0.67)">
      <path d="M165.6 18.2C130.4 4.5 91.2 13 63.8 39.5c-24 23.3-36.8 56.4-34.9 89.8 1.9 33.4 18.2 63.8 44.4 82.6 15 10.8 32.5 17.5 50.8 19.4v-42.8c-10.8-2.5-20.9-7.9-29.3-15.6-13.6-12.4-21.5-30-21.5-48.4s7.9-36 21.5-48.4c17.5-16 41.5-23.7 64.9-20.5 23.4 3.2 44.4 16.5 57 36.1 7.2 11.2 10.7 24.3 10.2 37.4-.5 13.1-4.8 25.8-12.6 36.3l29.8 30.6c15.2-18.7 23.5-42.3 23.5-66.9 0-38.6-20.9-73.6-54.7-91.8-6.1-3.3-12.7-5.9-19.4-7.8z" />
      {/* Dog Head */}
      <circle cx="148" cy="118" r="28" fill="#FFFFFF" />
      <circle cx="140" cy="112" r="6" fill="#632CA6" />
      <path d="M126 128c12 12 32 12 44 0" stroke="#632CA6" strokeWidth="6" strokeLinecap="round" />
      {/* Dog Ears */}
      <path d="M116 86c-14-16-36-8-36 12s18 28 32 18z" fill="#FFFFFF" />
      <path d="M176 86c14-16 36-8 36 12s-18 28-32 18z" fill="#FFFFFF" />
    </g>
  </svg>
);

// 5. Rocky Linux (Geometric Green Diamond/Shield)
export const RockyLinuxIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="36" fill="#0C1512" />
    <g transform="translate(32, 32)">
      {/* Central Rocky Emerald Mountain Facets */}
      <path
        d="M96 16L176 156H16L96 16z"
        fill="#10B981"
      />
      <path
        d="M96 16L16 156h80V16z"
        fill="#059669"
      />
      <path
        d="M96 68l50 88H46l50-88z"
        fill="#047857"
      />
      <path
        d="M96 68L46 156h50V68z"
        fill="#065F46"
      />
      <path
        d="M96 110l26 46H70l26-46z"
        fill="#34D399"
      />
      {/* Modern angled accent lines */}
      <path
        d="M142 80l38 66h-24l-26-46 12-20z"
        fill="#10B981"
        opacity="0.8"
      />
    </g>
  </svg>
);

// 6. Ubuntu (Circle of Friends)
export const UbuntuIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="36" fill="#E95420" />
    <g fill="#FFFFFF" transform="translate(18, 18) scale(0.86)">
      {/* Central Ring */}
      <circle cx="128" cy="128" r="92" fill="none" stroke="#FFFFFF" strokeWidth="26" />
      {/* 3 Circular Head Nodes */}
      <circle cx="44" cy="128" r="19" fill="#FFFFFF" />
      <circle cx="170" cy="55" r="19" fill="#FFFFFF" />
      <circle cx="170" cy="201" r="19" fill="#FFFFFF" />
      {/* Ring Cutouts */}
      <path d="M44 116h40v24H44z" fill="#E95420" />
      <path d="M160 48l24 30-20 16-24-30z" fill="#E95420" />
      <path d="M160 208l-20-16 24-30 20 16z" fill="#E95420" />
    </g>
  </svg>
);

// 7. Zabbix (Bold Red Stencil Z)
export const ZabbixIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Zabbix Red Badge */}
    <rect width="256" height="256" rx="36" fill="#D40000" />
    {/* Sharp Z Monogram */}
    <path
      d="M52 64h152v30L98 162h106v30H52v-30l106-68H52V64z"
      fill="#FFFFFF"
    />
  </svg>
);

// 8. VMware (Classic 3D Virtualization Cubes)
export const VmwareIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="36" fill="#0E1A24" />
    <g transform="translate(38, 48) scale(0.72)">
      {/* Left Cube */}
      <path d="M70 20L10 55v70l60 35 60-35V55L70 20z" fill="#0095D3" opacity="0.9" />
      <path d="M70 20L10 55l60 35 60-35-60-35z" fill="#29B6F6" />
      <path d="M70 90v70l60-35V55l-60 35z" fill="#0277BD" />
      {/* Right Interconnected Cube */}
      <path d="M180 80l-60 35v70l60 35 60-35v-70l-60-35z" fill="#607D8B" opacity="0.9" />
      <path d="M180 80l-60 35 60 35 60-35-60-35z" fill="#90A4AE" />
      <path d="M180 150v70l60-35v-70l-60 35z" fill="#455A64" />
    </g>
  </svg>
);

// 9. Cisco (Network Bridge Lines)
export const CiscoIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="36" fill="#0A1826" />
    <g fill="#1BA0D7" transform="translate(36, 68)">
      {/* Bridge antenna bars */}
      <rect x="0" y="44" width="12" height="40" rx="6" />
      <rect x="24" y="24" width="12" height="60" rx="6" />
      <rect x="48" y="44" width="12" height="40" rx="6" />
      <rect x="72" y="8" width="12" height="76" rx="6" />
      <rect x="96" y="8" width="12" height="76" rx="6" />
      <rect x="120" y="44" width="12" height="40" rx="6" />
      <rect x="144" y="24" width="12" height="60" rx="6" />
      <rect x="168" y="44" width="12" height="40" rx="6" />
    </g>
  </svg>
);

// 10. Docker (Container Whale)
export const DockerIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="36" fill="#0B1C2E" />
    <g fill="#2496ED" transform="translate(28, 48) scale(0.78)">
      {/* Shipping Containers */}
      <rect x="70" y="56" width="22" height="20" rx="2" fill="#2496ED" />
      <rect x="96" y="56" width="22" height="20" rx="2" fill="#2496ED" />
      <rect x="122" y="56" width="22" height="20" rx="2" fill="#2496ED" />
      <rect x="44" y="80" width="22" height="20" rx="2" fill="#2496ED" />
      <rect x="70" y="80" width="22" height="20" rx="2" fill="#2496ED" />
      <rect x="96" y="80" width="22" height="20" rx="2" fill="#2496ED" />
      <rect x="122" y="80" width="22" height="20" rx="2" fill="#2496ED" />
      <rect x="148" y="80" width="22" height="20" rx="2" fill="#2496ED" />
      {/* Whale Body */}
      <path
        d="M216 102c-4-2-12-2-16 0-3-12-14-18-24-18-3 0-6 1-8 2 0-24-18-42-42-42H44c-4 0-8 4-8 8v60c-16 6-28 22-28 40 0 28 26 48 58 48 44 0 84-24 104-54 18 2 40-4 46-24v-20z"
        fill="#2496ED"
      />
      <circle cx="192" cy="116" r="4" fill="#0B1C2E" />
    </g>
  </svg>
);

// 11. Terraform (HashiCorp Infrastructure as Code)
export const TerraformIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="36" fill="#140E24" />
    <g fill="#7B42BC" transform="translate(48, 44) scale(0.64)">
      <path d="M85 0l75 43v87L85 87V0z" fill="#844FBA" />
      <path d="M0 48l75 43v87L0 135V48z" fill="#7B42BC" />
      <path d="M170 48l75 43v87l-75-43V48z" fill="#5C4EE5" />
      <path d="M85 96l75 43v87l-75-43V96z" fill="#623CE4" />
    </g>
  </svg>
);

// 12. Grafana (Observability & Dashboards)
export const GrafanaIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 256 256"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="36" fill="#181313" />
    <g transform="translate(42, 42) scale(0.67)">
      <path
        d="M128 16C66.1 16 16 66.1 16 128s50.1 112 112 112 112-50.1 112-112S189.9 16 128 16zm0 186c-40.8 0-74-33.2-74-74s33.2-74 74-74 74 33.2 74 74-33.2 74-74 74z"
        fill="#F46800"
      />
      <circle cx="128" cy="128" r="42" fill="#FF8833" />
      <path d="M128 72c30.9 0 56 25.1 56 56h-24c0-17.7-14.3-32-32-32V72z" fill="#FFFFFF" />
    </g>
  </svg>
);
