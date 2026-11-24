#!/usr/bin/env bash
# Ejecuta esto en tu ordenador (desde la carpeta del repo): ./descargar-imagenes.sh
mkdir -p assets/img
wget -nc -P assets/img -i assets/imagenes-urls.txt
