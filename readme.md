# caraontime

Cara frequently is disappointed by the tram timetable offered by Google Maps.

This is the solution.

## Dev Installation

### Linux - Installing Rust + Tauri
https://tauri.app/v1/guides/getting-started/prerequisites/#setting-up-linux

Install deps:
```
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev \
    gir1.2-javascriptcoregtk-4.0 \
    libsoup-2.4
```

Install Rust:
```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

