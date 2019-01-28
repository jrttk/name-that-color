<template>
  <div class="index">
    <div class="palette-input">
      <h1>Name
        <br>That
        <br>Color
      </h1>
      <input type="text" placeholder="hex" v-model="colorHex">
      <button @click="getColorData(colorHex)">Find it out</button>
    </div>
    <div class="palette-info">
      <div
        class="palette"
        :style="{backgroundColor: `${data.hex['value'] || '000000'}`, boxShadow: `0 15px 30px rgba(${toRgb(data.hex['value'])}, .25)`}"
        v-if="data"
      ></div>
      <div class="palette" v-if="!data"></div>
      <ul v-if="data">
        <li>
          <span>NAME</span>
          {{ data.name['value'] }}
        </li>
        <li>
          <span>HEX</span>
          {{ data.hex['value'] }}
        </li>
        <li>
          <span>RGB</span>
          {{ toRgb(data.hex['value']) }}
        </li>
        <li>
          <span>CMYK</span>
          {{ `${data.cmyk['c'] || 0} ${data.cmyk['m'] || 0} ${data.cmyk['y'] || 0} ${data.cmyk['k'] || 0}` }}
        </li>
      </ul>
      <ul v-if="!data">
        <li>
          <span>NAME</span>
          -
        </li>
        <li>
          <span>HEX</span>
          -
        </li>
        <li>
          <span>RGB</span>
          -
        </li>
        <li>
          <span>CMYK</span>
          -
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import hexRgb from "hex-rgb";
import _ from "lodash";

export default {
  data: () => ({
    colorHex: "",
    data: null
  }),
  methods: {
    getColorData: async function(hex) {
      if (hex.includes("#")) {
        hex = await hex.replace("#", "");
      }
      if (hex.length === 3 || hex.length === 6) {
        let url = await `https://www.thecolorapi.com/id?hex=${hex}`;
        fetch(url)
          .then(data => {
            return data.json();
          })
          .then(res => {
            this.data = res;
            return res;
          });
      }
    },
    toRgb: function(val) {
      let newVal = hexRgb(val);
      return `${newVal.red}, ${newVal.green}, ${newVal.blue}`;
    }
  },
  head: {
    title: {
      inner: 'Name That Color'
    },
    meta: [
      { name: "application-name", content: "Name That Color" },
      {
        name: "description",
        content: "A simple web application which tell you the color name",
        id: "desc"
      },
      { name: "twitter:title", content: "Name That Color" },
      {
        n: "twitter:description",
        c: "A simple web application which tell you the color name"
      },
      { itemprop: "name", content: "Name That Color" },
      {
        itemprop: "description",
        content: "A simple web application which tell you the color name"
      },
      { property: "og:title", content: "Name That Color" }
    ],
    link: [
      { rel: 'icon', href: require('../../public/favicon.png'), sizes: '32x132', type: 'image/png' }
    ]
  }
};
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;

  > div {
    padding: 0 30px;

    &:first-of-type {
      > h1 {
        margin-bottom: 30px;

        @media screen and (max-width: 570px) {
          margin-bottom: 20px;
        }
      }

      > input {
        margin-bottom: 30px;

        @media screen and (max-width: 570px) {
          display: block;
          width: 100%;
        }
      }

      > button {
        width: 100%;
        display: block;
      }
    }
    
    @media screen and (max-width: 570px) {
      padding: 0;
    }
  }

  @media screen and (max-width: 570px) {
    height: auto;
    padding-top: 30px;
    display: block;
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media screen and (max-width: 570px) {
  .palette-input {
    margin-bottom: 50px;
  }
}

.palette-info {
  .palette {
    width: 250px;
    height: 250px;
    background: #aeaeae;
    border-radius: 15px;
    margin-bottom: 40px;
    transition: 0.3s;
  }

  @media screen and (max-width: 570px) {
    .palette {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 320px) {
    .palette {
      width: 100%;
      height: 0;
      padding-top: calc(100vw - 40px);
    }
  }

  ul {
    list-style: none;
    max-width: 180px;
    margin-left: auto;
    margin-right: auto;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // max-width: 200px;
      margin: 0 auto 10px auto;

      > span {
        &:first-of-type {
          font-weight: 700;
          min-width: 60px;
          display: inline-block;
          margin-right: 5px;
          letter-spacing: 1px;
          text-align: left;
        }

        &.copy {
          font-size: 12px;
          font-weight: 700;
          color: #f64e4d;
        }
      }
    }
  }
}
</style>

