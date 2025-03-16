

```
overturemaps download --bbox=139.56278584,35.52819808,139.91890837,35.81770595 -f geojson --type=place -o tokyoplace.geojson
```


```
$ cat public/tokyo.place.geo.json |jq '.features|length'
251796
```

