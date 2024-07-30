---
title: 'Configuraciones básicas de Neovim'
pubDate: 2024-06-08
description: 'Personaliza tu editor de texto Neovim para mejorar tu productividad.'
author: 'Entusiasta de Neovim'
image:
    url: '/img/nvim.webp'
    alt: 'Logotipo de Neovim.'
tags: ["neovim", "configuración", "editor de texto", "productividad"]
---

Neovim es una versión extendida de Vim que ofrece más funcionalidades y mejoras. Aquí te mostramos cómo configurarlo para empezar.

## Paso 1: Instala Neovim

Sigue las instrucciones de [instalación oficial](https://github.com/neovim/neovim/wiki/Installing-Neovim) para tu sistema operativo.

## Paso 2: Configura el archivo init.vim

El archivo de configuración principal de Neovim es `init.vim`. Localízalo o créalo en `~/.config/nvim/init.vim`:

```vim
" Habilitar números de línea
set number

" Resaltar la línea actual
set cursorline

" Habilitar el portapapeles del sistema
set clipboard=unnamedplus

" Configurar el espacio de tabulación
set tabstop=4
set shiftwidth=4
set expandtab
```

## Paso 3: Instala un gestor de plugins

Para gestionar plugins, recomendamos `vim-plug`. Instálalo siguiendo las instrucciones en su [repositorio de GitHub](https://github.com/junegunn/vim-plug).

Luego, añade plugins en tu `init.vim`:

```vim
call plug#begin('~/.config/nvim/plugged')

" Ejemplo: Tema gruvbox
Plug 'morhetz/gruvbox'

call plug#end()

" Configura el tema gruvbox
colorscheme gruvbox
set background=dark
```

## Paso 4: Recarga la configuración

Recarga tu configuración con `:source ~/.config/nvim/init.vim` y luego instala los plugins con `:PlugInstall`.

¡Ya tienes una configuración básica de Neovim!
