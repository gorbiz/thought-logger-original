# Thought Logger
1. I think
2. therefore...
3. *see (1)*

## Demo
https://youtu.be/zEAE33M1BS8 (old version)

## Install
```sh
npm install -g thought-logger
# if on Arch Linux also do (see https://github.com/electron/electron/issues/5318):
sudo pacman -Su gconf
```

## Use
```sh
thought-logger ~/thoughts.md
```

Preferably bind to a key combination.

## Multiple logs
Bind this to another key combination:
```sh
thought-logger ~/thought.md
```

### Distinguishing logs
```sh
echo "body.work { background: red; }" > ~/work.css
```

## Exta: i3 config example
Add ~this to `~/.config/i3/config`:
```
bindsym $mod+t exec --no-startup-id thought-logger ~/thought.md
for_window [title="^thought-logger$"] floating enable, move absolute position center
```

----
![Thought Logger logo](https://raw.githubusercontent.com/gorbiz/thought-logger/master/icon-114.png)
:tophat:
               :cat: :+1:
*Top hat cat approved!*
