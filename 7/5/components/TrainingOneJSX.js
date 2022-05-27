export default {
  props: {
    title: String,
  },
  data() {
    return {
      name: "",
      style: {
        color: "blue",
      },
      isCircle: false,
    };
  },
  render(h) {
    return (
      <div>
        <h2>
          {" "}
          {this.title} {this.name}{" "}
        </h2>{" "}
        <div style={this.style}>
          Imie: <input type="text" vModel_trim={this.name} />{" "}
          <div
            class={{
              "special-square": true,
              "--toCircle": this.isCircle,
            }}
            vOn:click={() => {
              this.circle = !this.circle;
            }}
          ></div>{" "}
        </div>
      </div>
    );
  },
};
