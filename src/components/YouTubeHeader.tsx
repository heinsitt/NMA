import React, { useState } from 'react';
import { Play, Search, Bell, Share2, Menu, X, CheckCircle2 } from 'lucide-react';

interface YouTubeHeaderProps {
  activeSection: string;
}

export const YouTubeHeader: React.FC<YouTubeHeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const chips = [
    { id: 'hero', label: 'All' },
    { id: 'about', label: 'Creator Story' },
    { id: 'skills', label: 'Tech Playlists' },
    { id: 'experience', label: 'NOC Stream' },
    { id: 'projects', label: 'Upcoming Premiere' },
    { id: 'education', label: 'Foundations' },
    { id: 'contact', label: 'Community' },
  ];

  const handleChipClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* YouTube Top Scrub / Page Progress Bar */}
      <div id="yt-scroll-progress" />

      {/* Main Top Header */}
      <header className="yt-header">
        <div className="yt-header-row">
          {/* Zone 1: YouTube Brand Lockup */}
          <a href="#top" className="yt-brand">
            <div className="yt-play-icon">
              <Play size={14} fill="currentColor" />
            </div>
            <span>Naing Moe Aung</span>
            <span className="yt-region-badge">MM</span>
          </a>

          {/* Zone 2: YouTube Search Bar */}
          <div className="yt-search-container">
            <div className="yt-search-bar">
              <Search size={16} color="#717171" />
              <input
                type="text"
                className="yt-search-input"
                placeholder="Search infrastructure, AWS, Linux, Cisco, Terraform..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="yt-search-kbd">⌘K</span>
            </div>
          </div>

          {/* Zone 3: Header Actions */}
          <div className="yt-header-actions">
            <a href="#contact" className="yt-subscribe-btn">
              <span>Subscribe / Hire</span>
            </a>

            <button
              className="yt-icon-btn menu-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Sticky YouTube Horizontal Chip Bar */}
        <div className="yt-chip-bar">
          {chips.map((chip) => {
            const isActive = activeSection === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => handleChipClick(chip.id)}
                className={`yt-chip ${isActive ? 'active' : ''}`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </header>
    </>
  );
};
