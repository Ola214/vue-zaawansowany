<template>
  <div>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-layout align-center justify-center column>
        <h1 class="display-2 font-weight-thin mb-3">Panel zarządzania</h1>
        <h4 class="subheading">Najważniejsze informacje w pigułce</h4>
      </v-layout>
    </v-parallax>
    <v-layout>
      <v-flex xs12 sm3 v-for="i in lastMonthStats" :key="i.desc">
        <v-card class="tile-proper-height" color="grey lighten-3" tile>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ i.value }}</div>
              <span>{{ i.desc }}</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm3 v-for="(i, index) in currentMonthStats" :key="i.desc">
        <v-card class="tile-proper-height" color="grey lighten-3" tile>
          <v-card-title primary-title>
            <div>
              <div class="headline">
                {{ i.value }}
                <span
                  :class="{
                    'stat--regress':
                      differenceInStats[index] < 0
                        ? 'stat--progress'
                        : differenceInStats[index] > 0,
                  }"
                  >{{ differenceInStats[index] }}
                </span>
              </div>
              <span>{{ i.desc }}</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastMonthStats: [
        { value: "$12,623", desc: "Utarg w poprzednim miesiącu" },
        { value: "56", desc: "Nowi użytkownicy w poprzednim miesiącu" },
        { value: "$1,562", desc: "Koszta w poprzednim miesiącu" },
        { value: "167", desc: "Sprzedaży w poprzednim miesiącu" },
        { value: "$420", desc: "Średnia dzienna w poprzednim miesiącu" },
      ],
      currentMonthStats: [
        { value: "$2,630", desc: "Utarg w obecnym miesiącu" },
        { value: "12", desc: "Nowi użytkownicy w obecnym miesiącu" },
        { value: "$232", desc: "Koszta w obecnym miesiącu" },
        { value: "16", desc: "Sprzedaży w obecnym miesiącu" },
        { value: "$10", desc: "Średnia dzienna w obecnym miesiącu" },
      ],
      items: [
        { header: "Wiadomości od współpracowników" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
      ],
      selected: [2],
      items2: [
        {
          action: "15 min",
          headline: "Brunch this weekend?",
          title: "Ali Connors",
          subtitle:
            "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          title: "me, Scrott, Jennifer",
          subtitle: "Wish I could come, but I'm out of town this weekend.",
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          title: "Sandra Adams",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
        },
        {
          action: "12 hr",
          headline: "Birthday gift",
          title: "Trevor Hansen",
          subtitle:
            "Have any ideas about what we should get Heidi for her birthday?",
        },
        {
          action: "18hr",
          headline: "Recipe to try",
          title: "Britta Holt",
          subtitle:
            "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    };
  },
  computed: {
    differenceInStats() {
      return this.currentMonthStats.map((stat, statIndex) => {
        const current = Number(stat.value.replace(",", "").replace("$", ""));
        const previous = Number(
          this.lastMonthStats[statIndex].value.replace(",", "").replace("$", "")
        );
        return current - previous;
      });
    },
  },
};
</script>
<style>
.stat--regress {
  color: #c00000;
}

.stat--progress {
  color: #00ca00;
}

.stat--progress::before {
  content: "(+";
}
.stat--progress::after {
  content: ")";
}

.stat--regress::after {
  content: ")";
}

.stat--regress::before {
  content: "(";
}

.tile-proper-height {
  height: calc(calc(100vh - 500px - 64px) / 2);
}
</style>