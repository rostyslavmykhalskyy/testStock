<template>
  <main>
    <h3>Chose stock</h3>
    <nav>
      <div class="filters">
        <selectFilter
          @changeFilter="filterChange"
          :items="filter"
          :index="index"
          v-for="(filter, index) in filters"
          :key="index"
        />
        <!-- <selectFilter :items="filters.seller" filterName="Seller" />
        <selectFilter :items="filters.veraity" filterName="Veraity" />
        <selectFilter :items="filters.color" filterName="Color" />
        <selectFilter :items="filters.'quality Type'" filterName="Quality Type" /> -->
      </div>

      <div class="actions">
        <button class="btn-text">Add new product</button>
        <button class="btn-text" @click="showAllStock">See All</button>
        <show-at breakpoint="large">
          <div class="arrows">
            <button @click="prevSlide('large')" class="icon">
              <i class="arrow-left"></i>
            </button>
            <button @click="nextSlide('large')" class="icon">
              <i class="arrow-right"></i>
            </button>
          </div>
        </show-at>
        <show-at breakpoint="medium">
          <div class="arrows">
            <button @click="prevSlide('medium')" class="icon">
              <i class="arrow-left"></i>
            </button>
            <button @click="nextSlide('medium')" class="icon">
              <i class="arrow-right"></i>
            </button>
          </div>
        </show-at>
        <show-at breakpoint="small">
          <div class="arrows">
            <button @click="prevSlide('small')" class="icon">
              <i class="arrow-left"></i>
            </button>
            <button @click="nextSlide('small')" class="icon">
              <i class="arrow-right"></i>
            </button>
          </div>
        </show-at>
      </div>
    </nav>
    <show-at breakpoint="large">
      <transition-group
        tag="div"
        class="carousel"
        :name="slideDirection ? 'slide-left' : 'slide'"
        mode="out-in"
      >
        <div
          class="card"
          v-for="item in filterStock.slice(slide, slideCount.large)"
          :key="item._id"
        >
          <div class="card-picture">
            <img :src="getImg(item.Picture)" alt="" />
          </div>
          <div class="card-text">
            <p>Seller: {{ item.Seller }}</p>
            <p>Veraity: {{ item.Veraity }}</p>
            <p>Flesh Color: {{ item["Flesh Color"] }}</p>
            <p>Market Processing: {{ item["Market Processing"] }}</p>
            <p>Quality Type: {{ item["Quality Type"] }}</p>
            <p>Soil: {{ item.Soil }}</p>
            <p>Size: {{ item.Size }}</p>
            <p>Packing: {{ item.Packing }}</p>
            <p>Loc: {{ item.Loc }}</p>
            <h4>{{ item.Price }}</h4>
          </div>
        </div>
      </transition-group>
    </show-at>
    <show-at breakpoint="medium">
      <transition-group
        tag="div"
        class="carousel"
        :name="slideDirection ? 'slide-left' : 'slide'"
        mode="out-in"
      >
        <div
          class="card"
          v-for="item in filterStock.slice(slide, slideCount.medium)"
          :key="item._id"
        >
          <div class="card-picture">
            <img :src="getImg(item.Picture)" alt="" />
          </div>
          <div class="card-text">
            <p>Seller: {{ item.Seller }}</p>
            <p>Veraity: {{ item.Veraity }}</p>
            <p>Flesh Color: {{ item["Flesh Color"] }}</p>
            <p>Market Processing: {{ item["Market Processing"] }}</p>
            <p>Quality Type: {{ item["Quality Type"] }}</p>
            <p>Soil: {{ item.Soil }}</p>
            <p>Size: {{ item.Size }}</p>
            <p>Packing: {{ item.Packing }}</p>
            <p>Loc: {{ item.Loc }}</p>
            <h4>{{ item.Price }}</h4>
          </div>
        </div>
      </transition-group>
    </show-at>
    <show-at breakpoint="small">
      <transition-group
        tag="div"
        class="carousel"
        :name="slideDirection ? 'slide-left' : 'slide'"
        mode="out-in"
      >
        <div
          class="card"
          v-for="item in filterStock.slice(slide, slideCount.small)"
          :key="item._id"
        >
          <div class="card-picture">
            <img :src="getImg(item.Picture)" alt="" />
          </div>
          <div class="card-text">
            <p>Seller: {{ item.Seller }}</p>
            <p>Veraity: {{ item.Veraity }}</p>
            <p>Flesh Color: {{ item["Flesh Color"] }}</p>
            <p>Market Processing: {{ item["Market Processing"] }}</p>
            <p>Quality Type: {{ item["Quality Type"] }}</p>
            <p>Soil: {{ item.Soil }}</p>
            <p>Size: {{ item.Size }}</p>
            <p>Packing: {{ item.Packing }}</p>
            <p>Loc: {{ item.Loc }}</p>
            <h4>{{ item.Price }}</h4>
          </div>
        </div>
      </transition-group>
    </show-at>
    <div class="carousel" v-if="!filterStock.length">
      <h5>
        Nothing
      </h5>
    </div>

    <!-- <div v-if="showAllStock" class="stock-all">
      <button @click="showAllStock = false">Close</button>
      <div class="card" v-for="(item, index) in filterStock" :key="index">
        <div class="card-picture">
          <img :src="getImg(item.Picture)" alt="" />
        </div>
        <div class="card-text">
          <p>Seller: {{ item.Seller }}</p>
          <p>Veraity: {{ item.Veraity }}</p>
          <p>Flesh Color: {{ item["Flesh Color"] }}</p>
          <p>Market Processing: {{ item["Market Processing"] }}</p>
          <p>Quality Type: {{ item["Quality Type"] }}</p>
          <p>Soil: {{ item.Soil }}</p>
          <p>Size: {{ item.Size }}</p>
          <p>Packing: {{ item.Packing }}</p>
          <p>Loc: {{ item.Loc }}</p>
          <h4>{{ item.Price }}</h4>
        </div>
      </div>
    </div> -->
    <h3>Buyers list</h3>
    <nav class="flex-end">
      <div class="actions">
        <button class="btn-text">Send offer for all buyers</button>
        <div class="contact-buttons">
          <button class="icon"><i class="letter"></i></button>
          <button class="icon"><i class="whatsapp-call"></i></button>
          <!-- <button class="icon"><i class="arrow-right"></i></button> -->
          <!-- <button class="icon"><i class="arrow-right"></i></button> -->
        </div>
      </div>
    </nav>
    <table>
      <thead>
        <tr>
          <th class="rotate">
            <div><span>№</span></div>
          </th>
          <th class="rotate">
            <div>
              <span>Nickname</span>
              <div>
                <button class="icon"><i class="arrow-up-small"></i></button>
                <button class="icon"><i class="arrow-down-small"></i></button>
              </div>
            </div>
          </th>
          <th class="rotate">
            <div>
              <span>Country</span>
              <div>
                <button class="icon"><i class="arrow-up-small"></i></button>
                <button class="icon"><i class="arrow-down-small"></i></button>
              </div>
            </div>
          </th>
          <th class="rotate">
            <div>
              <span>Weekly Demand</span>
              <div>
                <button class="icon"><i class="arrow-up-small"></i></button>
                <button class="icon"><i class="arrow-down-small"></i></button>
              </div>
            </div>
          </th>
          <th class="rotate">
            <div>
              <span>Number Of <br />Trucks Sold</span>
              <div>
                <button class="icon"><i class="arrow-up-small"></i></button>
                <button class="icon"><i class="arrow-down-small"></i></button>
              </div>
            </div>
          </th>
          <th class="rotate">
            <div>
              <span>Last Sale Date</span>
              <div>
                <button class="icon"><i class="arrow-up-small"></i></button>
                <button class="icon"><i class="arrow-down-small"></i></button>
              </div>
            </div>
          </th>
          <th class="rotate">
            <div>
              <span>Price Per Ton</span>
              <div>
                <button class="icon"><i class="arrow-up-small"></i></button>
                <button class="icon"><i class="arrow-down-small"></i></button>
              </div>
            </div>
          </th>
          <th class="rotate">
            <div>
              <span>Profit Per Ton</span>
              <div>
                <button class="icon"><i class="arrow-up-small"></i></button>
                <button class="icon"><i class="arrow-down-small"></i></button>
              </div>
            </div>
          </th>
          <th class="rotate">
            <div>
              <span>Rating</span>
              <div>
                <button class="icon"><i class="arrow-up-small"></i></button>
                <button class="icon"><i class="arrow-down-small"></i></button>
              </div>
            </div>
          </th>
          <th class="rotate">
            <div>
              <span>Actions</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Seapol</td>
          <td>Poland</td>
          <td>5</td>
          <td>0</td>
          <td>No sales</td>
          <td>750 PLN</td>
          <td>+120 PLN</td>
          <td>4.8</td>
          <td>
            <div class="actions">
              <button class="icon"><i class="letter"></i></button>
              <button class="icon"><i class="whatsapp-call"></i></button>
              <button class="icon"><i class="sms"></i></button>
              <button class="icon"><i class="sircles"></i></button>
            </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Seapol</td>
          <td>Poland</td>
          <td>5</td>
          <td>0</td>
          <td>No sales</td>
          <td>750 PLN</td>
          <td>+50 PLN</td>
          <td>4.8</td>
          <td>
            <div class="actions">
              <button class="icon"><i class="letter"></i></button>
              <button class="icon"><i class="whatsapp-call"></i></button>
              <button class="icon"><i class="sms"></i></button>
              <button class="icon"><i class="sircles"></i></button>
            </div>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Seapol</td>
          <td>Poland</td>
          <td>5</td>
          <td>0</td>
          <td>No sales</td>
          <td>750 PLN</td>
          <td>-10 PLN</td>
          <td>4.2</td>
          <td>
            <div class="actions">
              <button class="icon"><i class="letter"></i></button>
              <button class="icon"><i class="whatsapp-call"></i></button>
              <button class="icon"><i class="sms"></i></button>
              <button class="icon"><i class="sircles"></i></button>
            </div>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Seapol</td>
          <td>Poland</td>
          <td>5</td>
          <td>0</td>
          <td>No sales</td>
          <td>750 PLN</td>
          <td>+75 PLN</td>
          <td>2.8</td>
          <td>
            <div class="actions">
              <button class="icon"><i class="letter"></i></button>
              <button class="icon"><i class="whatsapp-call"></i></button>
              <button class="icon"><i class="sms"></i></button>
              <button class="icon"><i class="sircles"></i></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<script>
import { showAt, hideAt } from "vue-breakpoints";
import selectFilter from "@/components/selectFilter";
export default {
  name: "Stock-market",
  components: {
    selectFilter,
    // eslint-disable-next-line vue/no-unused-components
    hideAt,
    showAt
  },
  data() {
    return {
      filters: [
        {
          name: "Product",
          items: ["Potatos", "Broccoli's", "Carrots"],
          current: false
        },
        { name: "Seller", items: ["VegKing", "VeGo"], current: false },
        { name: "Veraity", items: ["Solist"], current: false },
        {
          name: "Flesh Color",
          items: ["Light Yellow", "Green", "Orange"],
          current: false
        },
        {
          name: "Quality Type",
          items: ["Unwashed/Unwashable"],
          current: false
        }
      ],
      stock: [
        {
          _id: 0,
          Seller: "VegKing",
          Product: "Potatos",
          Veraity: "Solist",
          "Flesh Color": "Light Yellow",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "potato-1.jpg"
        },
        {
          _id: 1,
          Seller: "VegKing",
          Product: "Potatos",
          Veraity: "Solist",
          "Flesh Color": "Light Yellow",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "potato-2.jpg"
        },
        {
          _id: 2,
          Seller: "VegKing",
          Product: "Potatos",
          Veraity: "Solist",
          "Flesh Color": "Light Yellow",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "potato-3.jpg"
        },
        {
          _id: 3,
          Seller: "VegKing",
          Product: "Potatos",
          Veraity: "Solist",
          "Flesh Color": "Light Yellow",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "potato-4.jpg"
        },
        {
          _id: 4,
          Seller: "VegKing",
          Product: "Potatos",
          Veraity: "Solist",
          "Flesh Color": "Light Yellow",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "potato-5.jpg"
        },
        {
          _id: 5,
          Seller: "VegKing",
          Product: "Carrots",
          Veraity: "Solist",
          "Flesh Color": "Orange",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "carrot.jpg"
        },
        {
          _id: 6,
          Seller: "VegKing",
          Product: "Carrots",
          Veraity: "Solist",
          "Flesh Color": "Orange",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "carrot.jpg"
        },
        {
          _id: 7,
          Seller: "VegKing",
          Product: "Carrots",
          Veraity: "Solist",
          "Flesh Color": "Orange",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "carrot.jpg"
        },
        {
          _id: 8,
          Seller: "VegKing",
          Product: "Carrots",
          Veraity: "Solist",
          "Flesh Color": "Orange",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "carrot.jpg"
        },
        {
          _id: 9,
          Seller: "VegKing",
          Product: "Carrots",
          Veraity: "Solist",
          "Flesh Color": "Orange",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "carrot.jpg"
        },
        {
          _id: 10,
          Seller: "VeGo",
          Product: "Broccoli's",
          Veraity: "Solist",
          "Flesh Color": "Green",
          "Market Processing": "Packing",
          "Quality Type": "Unwashed/Unwashable",
          Soil: "N/A",
          Size: "45-80",
          Packing: "1250 kg (big bags)",
          Loc: "SE 534-61 Vedum",
          Price: "105 EUR/Tone",
          Picture: "brocoli.jpg"
        }
      ],
      // showAllStock: false,
      slideCount: {
        large: 5,
        medium: 3,
        small: 2
      },
      slide: 0,
      slideDirection: false
    };
  },
  methods: {
    getImg(pic) {
      return require("../assets/pictures/" + pic);
    },
    filterChange(item, filterName) {
      // this.firstSlide = 0;
      // this.lastSlide = 0;
      this.filters[filterName].current = item;
      this.slideCount = {
        large: 5,
        medium: 3,
        small: 2
      };
      this.slide = 0;
    },
    showAllStock() {
      this.filters.map(filter => {
        filter.current = false;
      });
    },
    prevSlide(size) {
      if (this.slide > 0) {
        this.slide--;
        this.slideCount[size]--;
        this.slideDirection = true;
      }
    },
    nextSlide(size) {
      if (this.slideCount[size] < this.filterStock.length) {
        this.slide++;
        this.slideCount[size]++;
        this.slideDirection = false;
      }
    }
  },
  computed: {
    filterStock() {
      return this.stock.filter(item => {
        return (
          (this.filters[0].current
            ? item["Product"] === this.filters[0].current
            : true) &&
          (this.filters[1].current
            ? item["Seller"] === this.filters[1].current
            : true) &&
          (this.filters[2].current
            ? item["Veraity"] === this.filters[2].current
            : true) &&
          (this.filters[3].current
            ? item["Flesh Color"] === this.filters[3].current
            : true) &&
          (this.filters[4].current
            ? item["Quality Type"] === this.filters[4].current
            : true)
        );
      });
    }
  }
};
</script>
<style lang="scss">
.slide-leave-active,
.slide-left-leave-active {
  position: absolute;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.slide-leave-active {
  left: -30%;
}
.slide-left-leave-active {
  right: -30%;
}
.slide-move,
.slide-left-move {
  transition: all 0.5s ease;
}
.carousel {
  // overflow: hidden;
  position: relative;
}
</style>
