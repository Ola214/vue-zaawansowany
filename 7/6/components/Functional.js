export default {
  functional: true,
  props: {
    name: String,
  },
  render(h, context) {
    return [
      h("h2", context.props.name),
      h("button", context.data, context.children),
    ];
  },
};
