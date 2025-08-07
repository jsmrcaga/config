<h1 align="center">Shell & Stuff</h1>

## ghostty

```sh
ln -s \
	$PWD/config/shell/ghostty/ghostty.config \
	~/.config/ghostty/config
```

## tmux
```sh
ln -s \
	$PWD/config/tmux.conf \
	~/.tmux.conf
```

## zsh / oh-my-zsh

> [!TIP]
> Make sure to save your old config

This `.zshrc` allows overriding by creating a `.zshrc-override.sh` file
in the same directory as the `.zshrc` file

```sh
ln -s \
	$PWD/config/shell/zsh/.zshrc \
	~/.zshrc
```


## iterm2
* Import manually
