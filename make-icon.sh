#!/bin/zsh

function convert_icon() {
    convert -background transparent icon.svg -resize "$1x$1" "app/images/icon-$1.png"
}

convert_icon 16
convert_icon 48
convert_icon 128
